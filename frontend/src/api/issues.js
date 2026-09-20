import { buildUrl, http } from './client.js';

const RESOURCE = '/issues';

export const issueApi = {
  list: (params) => http.get(RESOURCE, params),
  detail: (id) => http.get(`${RESOURCE}/${id}`),
  create: (payload) => http.post(RESOURCE, payload),
  update: (id, payload) => http.patch(`${RESOURCE}/${id}`, payload),
  remove: (id) => http.delete(`${RESOURCE}/${id}`),
  transitions: (id) => http.get(`${RESOURCE}/${id}/transitions`),
  changeStatus: (id, payload) => http.post(`${RESOURCE}/${id}/transitions`, payload),
  addRecord: (id, payload) => http.post(`${RESOURCE}/${id}/records`, payload),
  /** 按当前筛选条件导出问题清单（CSV），超期口径与列表一致。 */
  exportCsv: (params) => {
    window.open(buildUrl(`${RESOURCE}/export`, params), '_blank');
  },
};
