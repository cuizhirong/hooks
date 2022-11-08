import React from 'react';

import { useEffect, useState } from "react"
import { cleanObject, useDebounce, useMount } from 'utils';
import * as qs from 'qs';

import { List } from "./list"
import { SearchPanel } from "./search-panel"

const apiUrl = 'http://localhost:3001';

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  const debounceParam = useDebounce(param, 200);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    })
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    })
  });

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
}