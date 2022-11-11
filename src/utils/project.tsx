import { useEffect } from 'react';
import { cleanObject } from 'utils';
import { Project } from 'screens/project-list/list'

import useAsync from './use-async';
import { useHttp } from './http';

function useProjects(params?: Partial<Project>) {
  const { run, ...result } = useAsync<Project[]>();

  const client = useHttp();

  useEffect(() => {
    run(client('projects', {data: cleanObject(params || {})}));
  }, [params]);

  return result;
}

export default useProjects;