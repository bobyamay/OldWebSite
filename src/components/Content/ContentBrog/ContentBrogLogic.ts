export interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('/brog.json');
  if (!response.ok) {
    throw new Error('ブログ記事が見つかりません');
  }
  const data = await response.json();
  return data.posts;
};

