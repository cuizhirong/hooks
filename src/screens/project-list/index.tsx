import { useState } from "react"
import { useDebounce } from 'utils';
import styled from '@emotion/styled';
import { Typography } from 'antd';

import useProjects from 'utils/project';
import useUsers from 'utils/user';

import { List } from "./list"
import { SearchPanel } from "./search-panel"

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  const debounceParam = useDebounce(param, 200);
  const { data: list, isLoading, error } = useProjects(debounceParam);
  const { data: users } = useUsers();

  return <Container>
    <h1>项目列表</h1>
    <SearchPanel users={users || []} param={param} setParam={setParam} />
    {error ? <Typography.Text type="danger">{error.message}</Typography.Text> : null}
    <List users={users || []} dataSource={list || []} loading={isLoading} />
  </Container>
}

const Container = styled.div`
  padding: 3.2rem;
`;