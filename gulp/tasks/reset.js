import { deleteAsync } from 'del';
export const reset = () => {
	return deleteAsync(['dist']);
};

// export const reset = () => {
// 	return del(app.path.clean);
// };
