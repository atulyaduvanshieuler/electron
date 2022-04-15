import DiagnosisComponent from './run-tests.component';
import testingPersonDetailsFormComponent from './testing-person-details-form.component';
import startTestingComponent from './start-testing.component';
var diagnosisRoutes = [
    {
        path: '/test/runtest',
        key: 'diagnosis',
        exact: true,
        component: DiagnosisComponent,
    },
    {
        path: '/test/filldetails',
        key: 'testing-person-details-form',
        exact: true,
        component: testingPersonDetailsFormComponent,
    },
    {
        path: '/test/starttesting',
        key: 'start-testing',
        exact: true,
        component: startTestingComponent,
    },
];
export default diagnosisRoutes;
//# sourceMappingURL=diagnosis.routing.js.map