import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const selectStyles = width => ({
  container: (provided) => ({
    ...provided,
    display: 'inline-block',
    height: '50px',
    margin: '0px 10px 0px 0px',
    width,
  }),
  control: (provided) => ({
    ...provided,
    height: '100%',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#3366FF' : state.isFocused ? '#f0f0f0' : null,
    color: state.isSelected ? 'white' : 'black',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000',
  }),
});

const submitStyles = {
  padding: '0px 15px 0px 15px',
  borderRadius: '5px',
  background: '#3366FF',
  color: 'white',
  border: 'none',
  height: '50px',
};

const platforms = ['GitHub', 'Gitee'];
const types = ['Repo', 'User'];
export const repoMetricOptionMap = new Map<string, string | string[]>([
  ['OpenRank', 'openrank'],
  ['Activity', 'activity'],
  ['Stars', 'stars'],
  ['Forks', 'technical_fork'],
  ['Attention', 'attention'],
  ['Bus Factor', 'bus_factor'],
  ['Contributors', 'new_contributors'],
  ['Issues', ['issues_new', 'issues_closed', 'issue_comments']],
  ['Issue Response Time', 'issue_response_time'],
  ['Issue Resolution Duration', 'issue_resolution_duration'],
  ['Change Requests', ['change_requests', 'change_requests_accepted', 'change_requests_reviews']],
  ['Change Request Response Time', 'change_request_response_time'],
  ['Change Request Resolution Duration', 'change_request_resolution_duration'],
  ['Code Change Lines', ['code_change_lines_add', 'code_change_lines_remove']],
]);
export const userMetricOptionMap = new Map<string, string | string[]>([
  ['OpenRank', 'openrank'],
  ['Activity', 'activity'],
]);

interface SearchInputProps {
  platform?: string | boolean;
  type?: string | boolean;
  metric?: string | boolean;
  onSubmit: (arg0: { platform: string; type: string; name: string; metric: string; metricDisplayName: string }) => void;
};

export default ({ platform, type, metric, onSubmit }: SearchInputProps): JSX.Element => {
  const optionsLimitCount = 20;
  const [repoList, setRepoList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [searchInputValue, setSearchInputvalue] = useState('');
  const [selectedName, setSelectedName] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [metricOptions, setMetricOptions] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState(null);

  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  useEffect(() => {
    let typeValue = type;
    if (type) {
      if (!types.includes(type as string)) {
        typeValue = types[0];
        if (type !== true) {
          alert(`Invalid type: ${type}`);
        }
      }
    } else {
      typeValue = types[0];
    }
    setSelectedType({ value: typeValue, label: typeValue });

    if (platform) {
      if (platforms.includes(platform as string)) {
        setSelectedPlatform({ value: platform, label: platform });
      } else {
        setSelectedPlatform({ value: platforms[0], label: platforms[0] });
        if (platform !== true) {
          alert(`Invalid platform: ${platform}`);
        }
      }
    } else {
      setSelectedPlatform({ value: platforms[0], label: platforms[0] });
    }

    const fetchRepoList = async () => {
      try {
        const response = await axios.get(`${customFields.ossBaseUrl}repo_list.csv`);
        const data: string = response.data;
        const parsedRepoList = data.split('\n')
          .slice(1)
          .map(line => line.trim().split(','))
          .filter(line => line.length === 3 && line[1] != '' && line[2] != '')
          .map(line => ({ platform: line[1], name: line[2] }));
        setRepoList(parsedRepoList);
      } catch (error) {
        console.error('Error fetching repo list:', error);
      }
    }
    const fetchUserList = async () => {
      try {
        const response = await axios.get(`${customFields.ossBaseUrl}user_list.csv`);
        const data: string = response.data;
        const parsedUserList = data.split('\n')
          .slice(1)
          .map(line => line.trim().split(','))
          .filter(line => line.length === 3 && line[1] != '' && line[2] != '')
          .map(line => ({ platform: line[1], name: line[2] }));
        setUserList(parsedUserList);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    }
    fetchRepoList();
    fetchUserList();
  }, []);

  useEffect(() => {
    if (!selectedPlatform || !selectedType) return;
    const options = [];
    const list = selectedType.value === 'Repo' ? repoList : userList;
    for (const r of list) {
      if (r.platform === selectedPlatform.value.toLowerCase()) {
        if (searchInputValue) {
          if (r.name.toLowerCase().includes(searchInputValue.toLowerCase())) {
            options.push({ value: r.name, label: r.name });
          }
        } else {
          options.push({ value: r.name, label: r.name });
        }
      }
      if (options.length >= optionsLimitCount) break;
    }
    setSelectOptions(options);
  }, [selectedPlatform, selectedType, repoList, userList, searchInputValue]);

  useEffect(() => {
    if (!selectedType) return;
    const map = selectedType.value === 'Repo' ? repoMetricOptionMap : userMetricOptionMap;
    const options = [...map.entries()].map(m => ({ value: m[1], label: m[0] }));
    setMetricOptions(options);
    setSelectedMetric({ value: 'openrank', label: 'OpenRank' });
  }, [selectedType]);

  return (
    <div>
      {!((platform && platforms.includes(platform as string)) || platform === true) && (
        <Select
          options={platforms.map(p => ({ value: p, label: p }))}
          value={selectedPlatform}
          onChange={(selectedOption) => { setSelectedPlatform(selectedOption); setSelectedName(null); }}
          isSearchable={false}
          isClearable={false}
          styles={selectStyles('120px')}
        />
      )}
      {!((type && types.includes(type as string)) || type === true) && (
        <Select
          options={types.map(p => ({ value: p, label: p }))}
          value={selectedType}
          onChange={(selectedOption) => { setSelectedType(selectedOption); setSelectedName(null); }}
          isSearchable={false}
          isClearable={false}
          styles={selectStyles('100px')}
        />
      )}
      <Select
        options={selectOptions}
        value={selectedName}
        inputValue={searchInputValue}
        onInputChange={setSearchInputvalue}
        onChange={(selectedOption) => { setSelectedName(selectedOption); setSearchInputvalue(''); }}
        placeholder={translate({ id: 'searchInput.placeholder' })}
        isClearable
        styles={selectStyles('300px')}
      />
      {!metric && (
        <Select
          options={metricOptions}
          value={selectedMetric}
          onChange={(selectedOption) => { setSelectedMetric(selectedOption); }}
          isSearchable={false}
          isClearable={false}
          styles={selectStyles('200px')}
        />
      )}
      <button
        style={submitStyles}
        onClick={() => {
          onSubmit && onSubmit({
            platform: selectedPlatform?.value,
            type: selectedType?.value,
            name: selectedName?.value,
            metric: selectedMetric?.value,
            metricDisplayName: selectedMetric?.label,
          })
        }}
      >
        {translate({ id: 'searchInput.submit' })}
      </button>
    </div>
  );
};
