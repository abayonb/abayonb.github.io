export const onError = error => (window.location = `/error?info=${JSON.stringify(error)}`);
