import { Select, Input, Button, Space, DatePicker, ConfigProvider } from "antd";
import type { DatePickerProps } from "antd";
import { useContext, useState, useEffect } from "react";
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import axios from "axios";

interface BannerProps {
	setPlatform: (value: string) => void;
	setRepoName: (value: string) => void;
	setDate: (date: any) => void;
  datePlaceholder: string;
  disabledDate: (current: any) => boolean;
}

interface RepoList {
  platform: string;
  name: string;
}

interface Option {
  value: string;
  label: string;
}

const Banner = ({ setPlatform, setRepoName, setDate, datePlaceholder, disabledDate }: BannerProps) => {
	const optionsLimitCount = 20;
	const [searchRepo, setSearchRepo] = useState<string>("umijs/umi");
	const [repoList, setRepoList] = useState<RepoList[]>([]);
	const [searchInputValue, setSearchInputValue] = useState("umijs/umi");
	const [selectOptions, setSelectOptions] = useState<Option[]>([]);

	const { siteConfig } = useDocusaurusContext();
	const { customFields } = siteConfig;

	const fetchRepoList = async () => {
		try {
      console.log('37');
			const response = await axios.get(
				`${customFields.ossBaseUrl}repo_list.csv`
			);
			const data: string = response.data;
			const parsedRepoList = data
				.split("\n")
				.slice(1)
				.map((line) => line.trim().split(","))
				.filter((line) => line.length === 3 && line[1] != "" && line[2] != "")
				.map((line) => ({ platform: line[1], name: line[2] }));
			setRepoList(parsedRepoList);
      console.log('48', parsedRepoList);
		} catch (error) {
			console.error("Error fetching repo list:", error);
		}
	};

	useEffect(() => {
		fetchRepoList();
	}, []);

	useEffect(() => {
		const options = [];
		for (const r of repoList) {
			if (
				searchInputValue &&
				r.name.toLowerCase().includes(searchRepo.toLowerCase())
			) {
				options.push({ value: r.name, label: r.name });
			}
			if (options.length > optionsLimitCount) break;
		}
		setSelectOptions(options);
	}, [repoList, searchInputValue]);

	const handlePlatformChange = (value: string) => {
		setPlatform(value);
		console.log(value);
	};

	const handleRepoChange = (value: string) => {
		setSearchRepo(value);
	};

  const handleRepoFocus = () => {
    const options = [];
    for (const r of repoList) {
      options.push({ value: r.name, label: r.name });
      if (options.length > optionsLimitCount) break;
    }
    setSelectOptions(options);
  };

	const handleRepoSearch = (value: string) => {
    console.log('83', value);
		const options = [];
		for (const r of repoList) {
			if (value) {
        if (r.name.toLowerCase().includes(value.toLowerCase())) {
          options.push({ value: r.name, label: r.name });
        }
      } else {
        options.push({ value: r.name, label: r.name });
      }
			if (options.length > optionsLimitCount) break;
		}
		setSelectOptions(options);
	};

  const handleRepoSelect = (value: string) => {
    setSearchInputValue(value);
    setRepoName(value);
  }

  const handleRepoClear = () => {
    setSearchInputValue('');
  }

  const handleSubmit = () => {
    console.log('111', searchInputValue)
    setRepoName(searchInputValue);
  }

	const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
		const formattedDateString = dateString.replace(/-/g, "");
		setDate(formattedDateString);
		console.log(date, formattedDateString);
	};
	return (
		<div className="banner-box">
			<div className="banner-title">OpenRank贡献度排行榜</div>
			<div className="banner-content">
				<Select
					defaultValue="github"
					style={{ width: 120 }}
					options={[
						{ value: "github", label: "GitHub" },
						{ value: "gitee", label: "Gitee" },
						{ value: "gitlab", label: "GitLab" },
					]}
					onChange={handlePlatformChange}
				/>
				<div>
					<Space.Compact style={{ width: "300px" }}>
						<Select
							showSearch
							options={selectOptions}
							value={searchInputValue}
							onChange={handleRepoChange}
							onSearch={handleRepoSearch}
              onFocus={handleRepoFocus}
              onSelect={handleRepoSelect}
							placeholder="umijs/umi"
							allowClear
              onClear={handleRepoClear}
							style={{ width: 260 }}
						/>
						<Button type="primary" onClick={handleSubmit}>
							{translate({ id: "searchInput.submit" })}
						</Button>
					</Space.Compact>
				</div>
				<ConfigProvider
					theme={{
						components: {
							DatePicker: {
								cellHeight: 52,
								cellWidth: 23,
							},
						},
					}}
				>
					<DatePicker
						onChange={handleDateChange}
						picker="month"
						placeholder={datePlaceholder}
            disabledDate={disabledDate}
					/>
				</ConfigProvider>
			</div>
		</div>
	);
};

export default Banner;
