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
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('./privacy-policy/privacy-policy.component').then(
                (m) => m.PrivacyPolicyComponent
            ),
    },
    { path: '**', redirectTo: '' },

];
