declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';

    export type LucideIcon = FC<SVGProps<SVGSVGElement>>;

    export const Shield: LucideIcon;
    export const Phone: LucideIcon;
    export const Mail: LucideIcon;
    export const MapPin: LucideIcon;
    export const ExternalLink: LucideIcon;
    export const Clock: LucideIcon;
}
