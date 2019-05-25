import React from 'react';
import { Statistic } from 'semantic-ui-react';
import './stylesheets/Statistics.less';

const items = [
    {
        key: 'TotalReaders', label: 'Laboratoires lecteurs', value: 34
    },
    {
        key: 'TotalArticles ', label: 'Articles classés', value: '1K'
    },
    {
        key: 'TotalThesis', label: 'Thèses présentes', value: 52
    },
    {
        key: 'TotalJournals', label: 'Journaux cités', value: 57
    },
    {
        key: 'TotalMeetings', label: 'Conférences répertoriées', value: 50
    }
];

const Statistics = () => <Statistic.Group items={items} color="blue" size="small" />;

export default Statistics;
