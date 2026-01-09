
export interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  category: 'Flagship' | 'Dashboard' | 'Computer Vision' | 'Medical' | 'Finance';
}

export interface Verification {
  title: string;
  issuer: string;
  url: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
