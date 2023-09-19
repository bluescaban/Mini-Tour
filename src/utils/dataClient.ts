import { get, post } from './apiUtil';

export const globalPaths = {
	editBaseUrl: `${process.env.REACT_APP_EDIT_API_BASE}/api/project`,
	fileBaseUrl: `${process.env.REACT_APP_API_BASE}/api/project/file`,
	lookupBaseUrl: `${process.env.REACT_APP_API_BASE}/api/project/lookup`,
	localeImageLookupBaseUrl: `${process.env.REACT_APP_API_BASE}/api/project/lookup/images`,
	apiBaseUrl: `${process.env.REACT_APP_API_BASE}/api/project`,
	translationBaseUrl: `${process.env.REACT_APP_API_BASE}/api/project/translation`,
	baseUrl: `${process.env.REACT_APP_API_BASE}`,
};

export class DataClient {
	public getEditMode = async () =>
		await get(`${globalPaths.apiBaseUrl}/iseditor`);
	public getFile = async (folder: string, file: string) =>
		await get(`${globalPaths.fileBaseUrl}/${folder}/${file}.json`);
	public hasLocaleImages = async (
		tourType: string,
		tourFolder: string,
		locale: string
	) =>
		await get(
			`${globalPaths.localeImageLookupBaseUrl}/${tourType}/${tourFolder}/${locale}`
		);
	public getLocaleInfo = async (locale: string) =>
		await get(`${globalPaths.lookupBaseUrl}/${locale}/`);
	public getLocale = async (type: string, locale: string) =>
		await get(`${globalPaths.apiBaseUrl}/translation/${type}/${locale}`);
	public postFile = async (fileName: string, content: any) =>
		await post(`${globalPaths.editBaseUrl}/file/${fileName}.json`, content);
}
