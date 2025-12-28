import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Vite env typings (augment global ImportMeta)
declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// API base URL configuration - should be set via environment variable in production
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Security validation
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL provided');
  }
  
  // Ensure URL is absolute and validate protocol
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  
  if (!fullUrl.startsWith('http://localhost:') && !fullUrl.startsWith('https://')) {
    throw new Error('Invalid URL protocol - only HTTPS and localhost allowed');
  }

  const res = await fetch(fullUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
    async ({ queryKey }) => {
      // Security validation
      const url = queryKey[0] as string;
      if (!url || typeof url !== 'string') {
        throw new Error('Invalid URL provided');
      }
      
      // Ensure URL is absolute and validate protocol
      const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
      
      if (!fullUrl.startsWith('http://localhost:') && !fullUrl.startsWith('https://')) {
        throw new Error('Invalid URL protocol - only HTTPS and localhost allowed');
      }

      const res = await fetch(fullUrl, {
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
