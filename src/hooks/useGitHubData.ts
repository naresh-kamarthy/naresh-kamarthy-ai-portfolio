import { useState, useEffect, useMemo } from "react";

export interface GitHubProfile {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  bio: string | null;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  html_url: string;
  topics: string[];
}

interface GitHubData {
  profile: GitHubProfile | null;
  repos: GitHubRepo[];
  aiRepos: GitHubRepo[];
  loading: boolean;
  error: boolean;
}

const CACHE_KEY = "gh_data_cache_v2";
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

function getCache(): { profile: GitHubProfile; repos: GitHubRepo[]; ts: number } | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (Date.now() - data.ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

const TOPICS_HEADER = {
  Accept: "application/vnd.github.mercy-preview+json",
};

export function useGitHubData(): GitHubData {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cached = getCache();
    if (cached) {
      setProfile(cached.profile);
      setRepos(cached.repos);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    Promise.all([
      fetch("https://api.github.com/users/naresh-kamarthy", {
        signal: controller.signal,
        headers: TOPICS_HEADER,
      }),
      fetch(
        "https://api.github.com/users/naresh-kamarthy/repos?per_page=100&sort=updated",
        { signal: controller.signal, headers: TOPICS_HEADER }
      ),
    ])
      .then(async ([profileRes, reposRes]) => {
        if (!profileRes.ok || !reposRes.ok) throw new Error("API error");
        const p = await profileRes.json();
        const r = await reposRes.json();
        const profileData: GitHubProfile = {
          followers: p.followers,
          following: p.following,
          public_repos: p.public_repos,
          avatar_url: p.avatar_url,
          bio: p.bio,
        };
        const repoData: GitHubRepo[] = (r as any[])
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language,
            updated_at: repo.updated_at,
            html_url: repo.html_url,
            topics: Array.isArray(repo.topics) ? repo.topics : [],
          }))
          .sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );

        setProfile(profileData);
        setRepos(repoData);
        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ profile: profileData, repos: repoData, ts: Date.now() })
          );
        } catch { }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  // Memoised ai-project filtered repos — avoids re-computation on every render
  const aiRepos = useMemo(
    () => repos.filter((repo) => repo.topics && repo.topics.includes("ai-project")),
    [repos]
  );

  return { profile, repos, aiRepos, loading, error };
}
