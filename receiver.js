const context = cast.framework.CastReceiverContext.getInstance();
context.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);
const playerManager = context.getPlayerManager();
const playbackConfig = new cast.framework.PlaybackConfig();
playbackConfig.licenseUrl = 'https://wv-keyos.licensekeyserver.com/';
playbackConfig.protectionSystem = cast.framework.ContentProtection.WIDEVINE;
playbackConfig.licenseRequestHandler = requestInfo => { 
  requestInfo.headers = {
    'Content-Type':'application/dash+xml',
    'customdata': 'PEtleU9TQXV0aGVudGljYXRpb25YTUw+CjxEYXRhPgogIDxHZW5lcmF0aW9uVGltZT4yMDIwLTAyLTE0IDA1OjA5OjQ2LjU4NjwvR2VuZXJhdGlvblRpbWU+CiAgPEV4cGlyYXRpb25UaW1lPjIwMjAtMDMtMTUgMDU6MDk6NDYuNTg3PC9FeHBpcmF0aW9uVGltZT4KICA8VW5pcXVlSWQ+NDg3ZjdiMjJmNjgzMTJkMmMxYmJjOTNiMWFlYTQ0NWI8L1VuaXF1ZUlkPgogIDxSU0FQdWJLZXlJZD5iODdmNGRlZTUyZGVjNGMzM2RmNmE0NWQ5NjUxZDcwZTwvUlNBUHViS2V5SWQ+CiAgPFdpZGV2aW5lUG9saWN5IGZsX0NhblBsYXk9InRydWUiIGZsX0NhblBlcnNpc3Q9ImZhbHNlIiAvPgogIDxXaWRldmluZUNvbnRlbnRLZXlTcGVjIFRyYWNrVHlwZT0iSEQiPgogICAgPFNlY3VyaXR5TGV2ZWw+MTwvU2VjdXJpdHlMZXZlbD4KICA8L1dpZGV2aW5lQ29udGVudEtleVNwZWM+CiAgPEZhaXJQbGF5UG9saWN5IHBlcnNpc3RlbnQ9ImZhbHNlIiAvPgogIDxMaWNlbnNlIHR5cGU9InNpbXBsZSIgLz4KPC9EYXRhPgo8U2lnbmF0dXJlPnlLY2xvMzJYbkEzc09ic0JJdEYyZVk0Q2pTSDUyQmp1Z2FLOFBoNXNFVGdqSUYxd2M4SXlwVHdpUytnaVhRNHE4bXYvRllKVEhPci8ybndNWVNOUnFWdXJRaWdoaUpzWVZWZTlOVVA0SXpmazZrZkJoVHByOGE0c2dwdnhLUVRLNlVmTkUzbFVaSksyS3V4Q2xFRFJoVzAvbXRZb0lnRStXY01yOWprR1lGbXhxcGt6cVF6RzV3UEtYZlBGZit2Wnl2SC83eWlMNHJjQUJJczFjK2lNTVFENkZzYWFiWEFDV2c5UnZyYmMzWTdRb3A5TXJ6bnpZTnJhekRMWEI5U1NMZmdsVG9aOFJSMXVlTExFS010V0tVaFQra0M2d3Naa2pIcnRmcGVMQWQrL09veHhUL1hoQW9XOVNMeEN1L0o5aTg3bGFwZklEYzdGMUozQ1dBMzBiZz09PC9TaWduYXR1cmU+CjwvS2V5T1NBdXRoZW50aWNhdGlvblhNTD4='
  };
  return playbackConfig;
};
context.start({playbackConfig : playbackConfig});