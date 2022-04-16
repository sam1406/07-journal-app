export default {
    name: 'daybook',
    component: () => import(/* webpackChunckName: "daybook" */'@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'daybook-noEntry',
            component: () => import(/* webpackChunckName: "daybook-noEntry" */'@/modules/daybook/views/NoEntrySelect.vue'),
        },
        {
            path: ':id',
            name: 'daybook-entry',
            component: () => import(/* webpackChunckName: "daybook-entry" */'@/modules/daybook/views/EntryView.vue'),
        }


    ]


}