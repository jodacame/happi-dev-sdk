var music = {
	api_key: false,
	endpoint: 'https://api.happi.dev/',
	path: '/music/',
	ver: 'v1',
	request: false,
	search: function (q, limit, type) {
		if (!limit) limit = 20;
		if (!type) type = '';
		else type = `&type=${type}`;
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}?q=${q}&limit=${limit}${type}`,
			{},
			this.getHeaders()
		);
	},
	artist: function (id_artist) {
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}artists/${id_artist}`,
			{},
			this.getHeaders()
		);
	},
	albums: function (id_artist) {
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}artists/${id_artist}/albums`,
			{},
			this.getHeaders()
		);
	},
	tracks: function (id_artist, id_album) {
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}artists/${id_artist}/albums/${id_album}/tracks`,
			{},
			this.getHeaders()
		);
	},
	smartPlaylist: function (id_artist, limit) {
		if (!limit) limit = 25;
		limit = parseInt(limit);
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}artists/${id_artist}/smart-playlist?limit=${limit}`,
			{},
			this.getHeaders()
		);
	},
	smartPlaylistByBPM: function (bpm, limit) {
		if (!limit) limit = 25;
		limit = parseInt(limit);
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}music/bpm/playlist/${bpm}?limit=${limit}`,
			{},
			this.getHeaders()
		);
	},
	acrostic: function (id_artist, message) {
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}artists/${id_artist}/smart-playlist/acrostic?message=${message}`,
			{},
			this.getHeaders()
		);
	},
	lyrics: function (id_artist, id_album, id_track) {
		return this.request.ajax(
			'GET',
			`${this.getEndPoint()}artists/${id_artist}/albums/${id_album}/tracks/${id_track}/lyrics`,
			{},
			this.getHeaders()
		);
	},
	getEndPoint: function () {
		return `${this.endpoint}${this.ver}${this.path}`;
	},
	getHeaders: function () {
		return {
			'x-happi-key': this.api_key,
		};
	},
};

module.exports = music;
