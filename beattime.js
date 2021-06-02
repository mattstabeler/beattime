module.exports = (currenttime = new Date()) => {
  // (UTC+1seconds + (UTC+1minutes * 60) + (UTC+1hours * 3600)) / 86.4
	const beat = Math.floor(((currenttime.getUTCSeconds() + 1) + ((currenttime.getUTCMinutes() + 1) * 60) + ((currenttime.getUTCHours() + 1) * 3600)) / 86.4)
	return beat;
}