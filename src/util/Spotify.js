let accessToken;
const clientId = '0335937ef6834134836e9bcc43f5298d';
const redirectUrl = "http://localhost:3000/";
const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expires_in = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expires_in * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = 'https://accounts.spotify.com/authorize?client_id=' + clientId + '&response_type=token&scope=playlist-modify-public&redirect_uri=' + redirectUrl;
            window.location = accessUrl;
        }
    }
}
export default Spotify;