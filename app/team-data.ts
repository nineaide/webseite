export type TeamMember = {
  name: string;
  role: string;
  image: string;
  width: number;
  height: number;
};

// Add only owner-provided names and authentic, approved team photographs.
export const teamMembers: TeamMember[] = [];
export const businessPhone: { label: string; href: string } | null = null;
