export function getErrorMessage(errObj: any): string {
	const defaultErrorMessage = "Something went wrong! Please try again";
	if (!errObj) return defaultErrorMessage;
	const errResponse = errObj.response;
	const errorMessage =
		errResponse && errResponse.data ? errResponse.data.message : defaultErrorMessage;
	return errorMessage;
}
