import React from "react";
import { DatePicker, ConfigProvider } from "antd";
import type { DatePickerProps } from "antd";
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import SearchInput from "../SearchInput";

interface BannerProps {
  onSubmit: (values: any) => void;
  setDate: (date: any) => void;
  datePlaceholder: string;
  disabledDate: (current: any) => boolean;
}

const Banner = ({ onSubmit, setDate, datePlaceholder, disabledDate }: BannerProps) => {

  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    const formattedDateString = (dateString as string).replace(/-/g, "");
    setDate(formattedDateString);
    console.log(date, formattedDateString);
  };
  return (
    <div className={styles.bannerBox}>
      <div className={styles.bannerTitle}>{translate({ id: 'communityLeaderboard.banner.title' })}</div>
      <div className={styles.bannerContent}>
        <SearchInput
          type={true}
          metric={'OpenRank'}
          onSubmit={onSubmit}
        />
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
