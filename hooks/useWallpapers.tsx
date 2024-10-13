export interface Wallpaper {
  url: string;
  name: string;
}

export function useWallpapers(): Wallpaper[] {
  return [
    { url: "https://images.unsplash.com/photo-1542704504091-49b394c14bb2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D", name: "Mountain" },
    { url: "https://images.unsplash.com/photo-1529391387768-ab39476d6a52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D", name: "Beach" },
  ];
}
