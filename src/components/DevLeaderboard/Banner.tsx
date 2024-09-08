import { Select, Input, Button, Space, DatePicker, ConfigProvider } from "antd";
import type { DatePickerProps } from "antd";
import { useContext, useState } from "react";

interface BannerProps {
  setPlatform: (value: string) => void;
  setRepo: (value: string) => void;
  setDate: (date: any) => void;
}

const Banner = ({ setPlatform, setRepo, setDate }: BannerProps) => {
  const [searchRepo, setSearchRepo] = useState<string>("X-lab2017/open-digger");

  const handlePlatformChange = (value: string) => {
    setPlatform(value);
    console.log(value);
  };

  const handleRepoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRepo(e.target.value);
  };

  const handleRepoSearch = () => {
    setRepo(searchRepo);
  };

  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(date);
    console.log(date, dateString);
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
            <Input
              defaultValue="X-lab2017/open-digger"
              onChange={handleRepoChange}
            />
            <Button type="primary" onClick={handleRepoSearch}>
              查询
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
          <DatePicker onChange={handleDateChange} picker="month" />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Banner;
