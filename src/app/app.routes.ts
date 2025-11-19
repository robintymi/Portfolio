import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'legal-notice',
        loadComponent: () =>
            import('./legal-notice/legal-notice.component').then(
                (m) => m.LegalNoticeComponent
            ),
    },
    { path: '**', redirectTo: '' },
];
