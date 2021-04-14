const products = [
	{
		_id: 1,
		name: 'Apple Iphone 12 mini (128GB) - White',
		image: 'https://images-na.ssl-images-amazon.com/images/I/71tT8J5cKuL._SL1500_.jpg',
		brand: 'apple',
		category: 'mobiles',
		description:
			'5.4-inch (13.7 cm diagonal) Super Retina XDR display, Ceramic Shield, tougher than any smartphone glass, A14 Bionic chip, the fastest chip ever in a smartphone, Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording, 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording, Industry-leading IP68 water resistance, Supports MagSafe accessories for easy attach and faster wireless charging, iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more',
		rating: 4.8,
		noOfReviews: 5,
		price: 68999,
		countInStock: 5,
	},
	// {
	// 	_id: 2,
	// 	name: 'Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator ',
	// 	image: 'https://images-na.ssl-images-amazon.com/images/I/71DJffKcMZL._SL1500_.jpg',
	// 	brand: 'samsung',
	// 	category: 'refrigerators',
	// 	description:
	// 		'Direct-cool refrigerator : Economical and Cooling without fluctuation, Capacity 198 liters: Suitable for families with 2 to 3 members and bachelors, Energy rating 4 Star : high efficiency model, Manufacturer warranty: 1 year on product, 10 years on compressor, Digital Inverter Compressor, Shelf type: Spill proof toughened glass; base stand drawer, Inside box: 1 unit Refrigerator & 1 Unit user manual, Spl. Features: Fresh Room | clear lamp view | runs on home inverter | safe clean back | Base stand drawer| deep door guard | Voltage range : 100V - 300V',
	// 	rating: 4.4,
	// 	noOfReviews: 3,
	// 	price: 16150,
	// 	countInStock: 3,
	// },
	{
		_id: 3,
		name: 'Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)',
		image: 'https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg',
		brand: 'amazon',
		category: 'electronics',
		description:
			'Echo Dot is a smart speaker that can be operated by voice, is compact and can fit in your favorite places, You can use Echo Dot as a Bluetooth speaker by pairing your phone to it. Or you can connect it to other speakers/headphones through Bluetooth/3.5mm jack, Stream millions of songs from Amazon Prime Music, Spotify, JioSaavn, Gaana, and Apple Music, Access songs in Hindi, English, Telugu, Tamil, Punjabi, Marathi, Bengali, Bhojpuri, Kannada and more, Just ask Alexa for music, news, trivia, scores, weather, alarms, kids rhymes and stories, New features are automatically added to Alexa, the brain of Echo Dot, Alexa can speak in both English & Hindi, Make your home smart with Alexa and use voice to control lights, ACs, TVs, geysers, water motors and more. You can purchase smart lights, plugs and other accessories separately',
		rating: 4.0,
		noOfReviews: 4,
		price: 3499,
		countInStock: 2,
	},
	{
		_id: 4,
		name:
			'Lenovo IdeaPad Flex 5 11th Gen Intel Core i3 14-inch FHD IPS 2-in-1 Touchscreen Laptop (8GB/256GB SSD/Win 10/Office 2019/Lenovo Digital Pen Stylus/Fingerprint Reader/Graphite Grey/1.5Kg)',
		image: 'https://images-na.ssl-images-amazon.com/images/I/61ta6vDkCRL._SL1000_.jpg',
		brand: 'lenovo',
		category: 'laptops',
		description:
			'Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 6MB Cache, OS: Pre-Loaded Windows 10 Home with Lifetime Validity, Pre-Installed: MS Office Home and Student 2019, Memory and Storage: 8GB RAM DDR4-3200 | 256 GB SSD, Display: 14" Full HD (1920x1080) | Brightness: 250 nits | 45% NTSC Colour Gamut | IPS Technology, Design: Touchscreen | 1.79 cm Thin and 1.5 kg Light | 4-sided Narrow Bezels | Backlit Keyboard | Fingerprint Reader, Battery Life: 7 Hours | 52.5 Wh Battery | Quick Charge (Up to 80% in 1 Hour)',
		rating: 3.8,
		noOfReviews: 9,
		price: 49990,
		countInStock: 8,
	},
	{
		_id: 5,
		name:
			'Fire TV Stick (2020) with Alexa Voice Remote (includes TV controls) | Stream HD Quality Video with Dolby Atmos Audio',
		image: 'https://images-na.ssl-images-amazon.com/images/I/51jULzY76lL._SL1000_.jpg',
		brand: 'amazon',
		category: 'electronics',
		description:
			'Latest release of our best-selling streaming media player. 50% more powerful than previous gen for fast streaming in Full HD. Includes Alexa Voice Remote with power and volume buttons., Voice remote (includes TV control) with dedicated power, volume and mute buttons to control your TV, so one remote is all you will need., Home theater audio with Dolby Atmos - Feel scenes come to life with immersive Dolby Atmos audio on select titles with compatible home audio systems., Tens of thousands of movies and shows from Prime Video, Netflix, Disney+ Hotstar, Zee5, SonyLIV, Sun NXT, ALT Balaji, Discovery Plus and many other Apps. Subscription fees may apply, What’s free - YouTube, YouTube Kids, MXPlayer, TVFPlay, YuppTV and many more.',
		rating: 4.0,
		noOfReviews: 12,
		price: 3999,
		countInStock: 2,
	},
	{
		_id: 6,
		name:
			'New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)',
		image: 'https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg',
		brand: 'apple',
		category: 'laptops',
		description:
			'Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance, Get more done with up to 20 hours of battery life, the longest ever in a Mac, 8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever, 8-core GPU with up to 5x faster graphics for graphics-intensive apps and games, 16-core Neural Engine for advanced machine learning, 8GB of unified memory so everything you do is fast and fluid, Superfast SSD storage launches apps and opens files in an instant',
		rating: 4.7,
		noOfReviews: 15,
		price: 116790,
		countInStock: 4,
	},
	{
		_id: 7,
		name: 'Apple Iphone 12 mini (128GB) - White',
		image: 'https://images-na.ssl-images-amazon.com/images/I/71tT8J5cKuL._SL1500_.jpg',
		brand: 'apple',
		category: 'mobiles',
		description:
			'5.4-inch (13.7 cm diagonal) Super Retina XDR display, Ceramic Shield, tougher than any smartphone glass, A14 Bionic chip, the fastest chip ever in a smartphone, Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording, 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording, Industry-leading IP68 water resistance, Supports MagSafe accessories for easy attach and faster wireless charging, iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more',
		rating: 4.8,
		noOfReviews: 5,
		price: 68999,
		countInStock: 5,
	},
	// {
	// 	_id: 8,
	// 	name: 'Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator ',
	// 	image: 'https://images-na.ssl-images-amazon.com/images/I/71DJffKcMZL._SL1500_.jpg',
	// 	brand: 'samsung',
	// 	category: 'refrigerators',
	// 	description:
	// 		'Direct-cool refrigerator : Economical and Cooling without fluctuation, Capacity 198 liters: Suitable for families with 2 to 3 members and bachelors, Energy rating 4 Star : high efficiency model, Manufacturer warranty: 1 year on product, 10 years on compressor, Digital Inverter Compressor, Shelf type: Spill proof toughened glass; base stand drawer, Inside box: 1 unit Refrigerator & 1 Unit user manual, Spl. Features: Fresh Room | clear lamp view | runs on home inverter | safe clean back | Base stand drawer| deep door guard | Voltage range : 100V - 300V',
	// 	rating: 4.4,
	// 	noOfReviews: 3,
	// 	price: 16150,
	// 	countInStock: 3,
	// },
	{
		_id: 9,
		name: 'Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)',
		image: 'https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg',
		brand: 'amazon',
		category: 'electronics',
		description:
			'Echo Dot is a smart speaker that can be operated by voice, is compact and can fit in your favorite places, You can use Echo Dot as a Bluetooth speaker by pairing your phone to it. Or you can connect it to other speakers/headphones through Bluetooth/3.5mm jack, Stream millions of songs from Amazon Prime Music, Spotify, JioSaavn, Gaana, and Apple Music, Access songs in Hindi, English, Telugu, Tamil, Punjabi, Marathi, Bengali, Bhojpuri, Kannada and more, Just ask Alexa for music, news, trivia, scores, weather, alarms, kids rhymes and stories, New features are automatically added to Alexa, the brain of Echo Dot, Alexa can speak in both English & Hindi, Make your home smart with Alexa and use voice to control lights, ACs, TVs, geysers, water motors and more. You can purchase smart lights, plugs and other accessories separately',
		rating: 4.0,
		noOfReviews: 4,
		price: 3499,
		countInStock: 2,
	},
	{
		_id: 10,
		name:
			'Lenovo IdeaPad Flex 5 11th Gen Intel Core i3 14-inch FHD IPS 2-in-1 Touchscreen Laptop (8GB/256GB SSD/Win 10/Office 2019/Lenovo Digital Pen Stylus/Fingerprint Reader/Graphite Grey/1.5Kg)',
		image: 'https://images-na.ssl-images-amazon.com/images/I/61ta6vDkCRL._SL1000_.jpg',
		brand: 'lenovo',
		category: 'laptops',
		description:
			'Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 6MB Cache, OS: Pre-Loaded Windows 10 Home with Lifetime Validity, Pre-Installed: MS Office Home and Student 2019, Memory and Storage: 8GB RAM DDR4-3200 | 256 GB SSD, Display: 14" Full HD (1920x1080) | Brightness: 250 nits | 45% NTSC Colour Gamut | IPS Technology, Design: Touchscreen | 1.79 cm Thin and 1.5 kg Light | 4-sided Narrow Bezels | Backlit Keyboard | Fingerprint Reader, Battery Life: 7 Hours | 52.5 Wh Battery | Quick Charge (Up to 80% in 1 Hour)',
		rating: 3.8,
		noOfReviews: 9,
		price: 49990,
		countInStock: 8,
	},
	{
		_id: 11,
		name:
			'Fire TV Stick (2020) with Alexa Voice Remote (includes TV controls) | Stream HD Quality Video with Dolby Atmos Audio',
		image: 'https://images-na.ssl-images-amazon.com/images/I/51jULzY76lL._SL1000_.jpg',
		brand: 'amazon',
		category: 'electronics',
		description:
			'Latest release of our best-selling streaming media player. 50% more powerful than previous gen for fast streaming in Full HD. Includes Alexa Voice Remote with power and volume buttons., Voice remote (includes TV control) with dedicated power, volume and mute buttons to control your TV, so one remote is all you will need., Home theater audio with Dolby Atmos - Feel scenes come to life with immersive Dolby Atmos audio on select titles with compatible home audio systems., Tens of thousands of movies and shows from Prime Video, Netflix, Disney+ Hotstar, Zee5, SonyLIV, Sun NXT, ALT Balaji, Discovery Plus and many other Apps. Subscription fees may apply, What’s free - YouTube, YouTube Kids, MXPlayer, TVFPlay, YuppTV and many more.',
		rating: 4.0,
		noOfReviews: 12,
		price: 3999,
		countInStock: 2,
	},
	{
		_id: 12,
		name:
			'New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)',
		image: 'https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg',
		brand: 'apple',
		category: 'laptops',
		description:
			'Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance, Get more done with up to 20 hours of battery life, the longest ever in a Mac, 8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever, 8-core GPU with up to 5x faster graphics for graphics-intensive apps and games, 16-core Neural Engine for advanced machine learning, 8GB of unified memory so everything you do is fast and fluid, Superfast SSD storage launches apps and opens files in an instant',
		rating: 4.7,
		noOfReviews: 15,
		price: 116790,
		countInStock: 4,
	},
];

module.exports = products;
