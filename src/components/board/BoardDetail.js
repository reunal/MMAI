import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { Divider, Space, Typography } from "antd";
import axios from "axios";
import "../../style/board/css/BoardDetail.css";
import parse from "html-react-parser";

const { Text, Title } = Typography;

const BoardDetail = ({ record }) => {
  const [data, setData] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/data/${postId}`);
        if (res.status === 200) {
          console.log(res.data);
          setData(() => res.data);
        } else {
          console.log("Err");
        }
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  const onDownload = async (fileName) => {
    // const download = await axios.get()
  };

  return (
    <>
      <div className="DetailContainer">
        <Divider />
        <Title level={1}>{data.title}</Title>
        <Divider />
        <Text>작성자 : 최고 관리자 조회수 : 1</Text>
        <Divider />
        {data.length !== 0 && data.file.length !== 0 && (
          <>
            <Text className="attachedFile">첨부파일 : </Text>
            <Text>
              <Space direction="vertical">
                {data.file.map((file) => (
                  <Text>
                    <button type="button" onClick={() => onDownload(file)}>
                      {file}
                    </button>
                  </Text>
                ))}
              </Space>
            </Text>
            <Divider />
          </>
        )}
        <div>{data?.content ? parse(data.content) : null}</div>
      </div>
    </>
  );
};

export default BoardDetail;
