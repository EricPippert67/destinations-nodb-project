  
const data = [
    {
      id: 1,
      city: "Paris",
      img:'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/02/06/40/top-10-vacation-spots-paris.rend.hgtvcom.1280.960.suffix/1491591583118.jpeg',
     state_country: "France",
      whatToDo: [" Le Petit Déjeuner", "Notre-Dame de Paris",
      "Musée du Louvre", "Arc de Triomphe", "Eiffel Tower"],
      placesToEat: ["Le Jules Verne","Les Climats", "L'Assaggio",
      "Brasserie Bellanger", "Hotel Particulier Montmartre"],
      whereToStay: [
        "Hotel Providence","Maison Souquet","Hotel Regina",
        "Le Roch Hotel and Spa","Saint James Paris"
      ]
    },
    {
        id: 2,
        city: "New York",
        img:'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/2/top-10-vacation-spots-new-york-city.jpg.rend.hgtvcom.1280.960.suffix/1491584557358.jpeg',
       state_country: "New York",
        whatToDo: ["Shopping", "The Metroplitan Museum of Art",
        "Statue of Liberty", "Empire State Building", "9/11 Memorial Museum"], 
        placesToEat: ["Bar Stanley at Neiman Marcus", "Belcampo",
        "Blue Bottle Coffee", "Bluestone Lane", "Bouchon Bakery"],
        whereToStay: [
          "Park Central Hotel","Four Seasons Hotel","Millennium Hilton",
          "The Plaza"
        ]
    },
    {
        id: 3,
        city: "Rome",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/2/top-10-vacation-spots-rome-colluseum.jpg.rend.hgtvcom.1280.960.suffix/1491584557313.jpeg",
       state_country: "Italy",
        whatToDo: ["Colosseum", "St. Peter's Basilica",
        "Pantheon", "Trevi Fountain", "Sistine Chapel"],
        placesToEat: ["Pizza al Taglio","Zizzi Pizza", "Fatamorgana Gelato",
        "Da Enzo", "Pizza con la Mortazza"],
        whereToStay: [
          "Hotel Campo de' Fiori","The St. Regis Rome","Best-Western Hotel President",
          "Palazzo Cardinal Cesi"
        ]
    },
    {
        id: 4,
        city: "Cancun",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/02/06/6d/top-10-vacation-spots-cancun.rend.hgtvcom.1280.960.suffix/1491591583276.jpeg",
       state_country: "Mexico",
        whatToDo: ["Cancun Underwater Museum", "Island of Isla Contoy",
        "Xcaret Park", "Mercado 28"],
        placesToEat: ["La Dolce Vita","Lorenzillo's", "Peter's Restaurante",
        "Crab House Cancun", "Hacienda Sisal"],
        whereToStay: [
          "Paradisus Cancun","Le Blanc Spa Resort","Secrets The Vine Cancun",
          "Hard Rock Hotel Cancun","Grand Fiesta Americana Coral Beach Cancun Resort"
        ]
    },
    {
        id: 5,
        city: "London",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/2/top-10-vacation-spots-london-big-ben.jpg.rend.hgtvcom.1280.960.suffix/1491584557692.jpeg",
       state_country: "England",
        whatToDo: ["Westminster Abbey", "Buckingham Palace",
        "Tower Bridge", "The British Museum", "The National Gallery"],
        placesToEat: ["Namaaste Kitchen Indian Restaurant","The Cauldron", "E Pellicci",
        "Bar 61 Restaurant", "The Wolseley"],
        whereToStay: [
          "Park Plaza Westminster Bridge","The Waldorf Hilton","The Montcalm Royal London House",  "Mandarin Oriental Hyde Park","Rosewood London"
        ]
    },
    {
        id: 6,
        city: "Miami",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/02/06/2a/top-10-vacation-spots-miami.rend.hgtvcom.1280.960.suffix/1491591583444.jpeg",
       state_country: "Florida",
        whatToDo: ["Salsa Mia", "Wynwood Walls",
        "Vizcaya Museum and Gardens", "Bayside Marketplace", "Bayfront Park"],
        placesToEat: ["Moxie's","OMAKI sushi", "KYU",
        "Bombay Darbar", "Santorini by Georgios"],
        whereToStay: [
          "East Miami","Mandarin Oriental","InterContinental Miami",
          "Conrad Miami","The Standard Spa, Miami Beach"
        ]
    },
    {
        id: 7,
        city: "Orlando",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/02/06/27/top-10-vacation-spots-orlando.rend.hgtvcom.1280.960.suffix/1491591583135.jpeg",
       state_country: "Florida",
        whatToDo: ["Universal Orlando", "ICON Park",
        "SeaWorld Orlando", "Madame Tussauds", "Lake Eola Park"],
        placesToEat: ["The Melting Pot","The Oceanaire Seafood Room", "Mrs Potato Restaurant", "Border Grill Fresh-Mex", "NYPD Pizza Metro West"],
        whereToStay: [
          "Loews Royal Pacific Resort","Universal's Cabana Bay Beach Resort","Loews Portofino Bay Hotel at Universal Orlando","Loews Sapphire Falls Resort at Universal Orlando","Universal's Aventura Hotel"
        ]
    },
    {
        id: 8,
        city: "San Francisco",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/2/top-10-vacation-spots-san-francisco.jpg.rend.hgtvcom.1280.960.suffix/1491584557321.jpeg",
       state_country: "California",
        whatToDo: ["PIER 39", "Golden Gate Bridge",
        "Coit Tower", "Golden Gate Park", "Exploratorium"],
        placesToEat: ["Bubba Gump Shrimp","Teeth", "State Bird Provisions",
        "La Ciccia", "Nopa"],
        whereToStay: [
          "Hyatt Regency San Francisco","Hyatt Centric Fisherman's Wharf","San Francisco Marriott Marquis","Grand Hyatt San Francisco","Hilton San Francisco Union Square"
        ]
    },
    {
        id: 9,
        city: "Myrtle Beach",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/02/06/00/top-10-vacation-spots-myrtle-beach.rend.hgtvcom.1280.960.suffix/1491591583167.jpeg",
       state_country: "South Carolina",
        whatToDo: ["WonderWorks Myrtle Beach", "Broadway at the Beach",
        "Family Kingdom Amusement Park", "Hollywood Wax Museum", "Myrtle Waves Water Park"],
        placesToEat: ["Croissants Bakery and Bistro","Bill's Seafood-Sunset Beach", "Eggs Up Grill", "The Melting Pot", "Cafe Old Vienna"],
        whereToStay: [
          "Marriott Myrtle Beach Resort and Spa at Grande Dunes","Breakers Myrtle Beach Resort","Coral Beach Resort and Suites",
          "Hampton Inn and Suites Myrtle Beach/Oceanfront","Marriotts OceanWatch Villas at Grande Dunes"
        ]
    },
    {
        id: 10,
        city: "Branson",
        img:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/02/06/0f/top-10-vacation-spots-branson.rend.hgtvcom.1280.960.suffix/1491591583328.jpeg",
       state_country: "Missouri",
        whatToDo: ["Escape Code", "Ripley's Believe it or Not!",
        "Branson Ferris Wheel", "HollyWood Wax Museum", "The Butterfly Palace and Rainforest Adventure"],
        placesToEat: ["Danna's BBQ and Burger Shop","Farmhouse Restaurant", "Billy Bob's Dairy Land", "Rocco's Pizza", "Gettin Basted"],
        whereToStay: [
          "Marriott's Willow Ridge Lodge","Chateau on the Lake Resort Spa and Convention Center","Hilton Promenade at Branson Landing",
          "Welk Resorts Timber Ridge Lodges","Radisson Hotel"
        ]
    },
    {
        id: 11,
        city: "Florence",
        img:"https://www.humanities.org.au/wp-content/uploads/2017/02/Florence-duomo-pexels-881x430.jpg",
       state_country: "Italy",
        whatToDo: ["Piazzale Michelangelo", "Uffizi Gallery",
        "Ponte Vecchio", "Cathedral of Santa Maria del Fiore", "Piazza della Signoria"],
        placesToEat: ["Ristorante il Paiolo","La Buchetta Food and Wine Restaurant", "Trattoria Mario","Trattoria Cammillo", "I'Girone De'Ghiotti"],
        whereToStay: [
          "Hotel Brunelleshi","Hotel Lungarno","The Westin Excelsior, Florence",
          "Baglioni Relais Santa Croce","Brand Hotel Minerva"
        ]
    },
    {
        id: 12,
        city: "Queensland's The Great Barrier Reef",
        img:"https://i.pinimg.com/736x/76/42/10/7642103326c8ea98968bed1365018209--mother-earth-mother-nature.jpg",
       state_country: "Australia",
        whatToDo: ["Hartley's Crocodile Adventures", "Michaelmas and Upolu Cays National Park", "Lizard Island National Park", "Heart Reef", "James Cook Museum"],
        placesToEat: ["The Little Larder","Watergate Port Douglas", "Grant Street Kitchen",
        "Fusion Art Bar and Tapas", "Snoogies"],
        whereToStay: [
          "Lizard Island Resort","Sheraton Grand Mirage Resort Port Douglas","Sea Change Beachfront Apartments", "Green Island Resort","Fitzroy Island Resort"
        ]
    },
    {
        id: 13,
        city: "Bora Bora",
        img:"https://blog.sdnyrealty.com/hs-fs/hubfs/Blog_Images/beach_house_2.jpg?width=630&name=beach_house_2.jpg",
       state_country: "French Polynesia",
        whatToDo: ["Bora Bora Pure Snorkeling", "Mt. Pahia Summit",
        "Matira Beach", "Amanahune", "Paopao Point"],
        placesToEat: ["La Villa Mahana","La Matira Beach Restaurant", "Bora Bora Yacht Club", "Snack Matira", "Restaurant Fare Manuia"],
        whereToStay: [
          "InterContinental Le Moana Bora Bora","Four Seasons Resort Bora Bora","The st. Regis Bora Bora Resort", "InterContinental Bora Bora Resort Thalasso Spa","Conrad Bora Bora Nui"
        ]
    },
    {
      id: 14,
      city: "Tokyo",
      img:"https://st4.depositphotos.com/14518508/22354/v/600/depositphotos_223544626-stock-video-shibuya-tokyo-japan-july-27th.jpg",  
     state_country: "Japan",
      whatToDo: ["Shinjuku Gyoen National Garden", "Tokyo Tower",
      "Chidorigafuchi Green Way", "Senso-ji", "Meiji Jingu"],
      placesToEat: ["Sometaro","Kikko", "Teppan Baby",
      "Han No Daidokoro", "Rokurinsha"],
      whereToStay: [
        "Hilton Tokyo","Keio Plaza Hotel","The Ritz-Carlton, Tokyo",
        "Park Hotel Tokyo","Shinjuku Granbell Hotel"
      ]
    },
    {
        id: 15,
        city: "Cusco",
        img:"https://www.ancient-origins.es/sites/default/files/styles/large/public/water-channels-at-Tipon.jpg?itok=FJgkf0VX",
       state_country: "Peru",
        whatToDo: ["Saqsaywaman", "Qorikancha",
        "Twelve Angled Stone", "Q'enco Archeological Complex", "Cusco Cathedral"],
        placesToEat: ["El Virrey del Truco Restaurante","Fuego, Burgers and Barbecue Restaurant", "Uchu Peruvian Steakhouse", "Cicciolina", "Limo"],
        whereToStay: [
          "Palacio del Inka","Belmond Hotel Monasterio","Novotel Cusco",
          "JW Marriott El Convento Cusco","Hilton Garden Inn Cusco"
        ]
    },
    {
        id: 16,
        city: "Maui",
        img:"https://images.wisegeek.com/twilight-scene-from-hawaii.jpg",
       state_country: "Hawaii",
        whatToDo: ["Maui Ocean Center, The  Aquarium of Hawaii", "Haleakala National Park",
        "Wai'anapanapa State Park", "Nakalele Blowhole", "Ho'okipa Beach Park"],
        placesToEat: ["Da Kitchen","Merriman's Maui", "Down the  Hatch",
        "Tin Roof", "Coconut's Fish Cafe"],
        whereToStay: [
          "Hyatt Regency Maui Resort and Spa","Maui Kaanapali Villas","Wailea Beach Resort-Marriott, Maui",
          "Kaanapali Alii Resort","Grand Wailea Maui, A Waldorf Astoria Resort"
        ]
    },
    {
        id: 17,
        city: "Barcelona",
        img:"https://www.elnacional.cat/uploads/s1/82/70/70/1/barcelona-credito-holidu.jpeg",
       state_country: "Spain",
        whatToDo: ["Casa Batllo'", "Casa Mila",
        "Park Guell", "La Sagrada Familia", "Camp Nou"],
        placesToEat: ["Viana Barcelona","Restaurante BelleBuon", "Acces",
        "Paisano Cafe", "Cera 23"],
        whereToStay: [
          "Hostal Absolut Stay","Ohla Barcelona","Grand Hotel Central",
          "Mandarin Oriental, Barcelona","H10 Madison"
        ]
    },
    {
        id: 18,
        city: "Sydney",
        img:"https://www.sydneyoperahouse.com/content/dam/soh/footer/corporate/image-gallery/the-building/SOH_HL_2017_243_credit_HamiltonLund_1600x900.jpg.image.800.450.high.jpg",
       state_country: "Australia",
        whatToDo: ["Sydney Harbour Bridge", "Sydney Opera House",
        "Darling Harbour", "Taronga Zoo Sydney", "Art Gallery of New South Wales"],
        placesToEat: ["Tetsuya's Restaurant","Fortune Village Chinese Restaurant", "Cafe Sydney", "LuMi Bar and Dining", "Thai Pothong Restaurant"],
        whereToStay: [
          "Park Hyatt  Sydney","Hilton Sydney","Shangri-La Hotel, Sydney",
          "InterContinental Sydney","InterContinental Sydney Double Bay"
        ]
    },
    {
        id: 19,
        city: "Cape Town",
        img:"https://www.wallpaperflare.com/static/228/74/333/cape-town-south-africa-mountains-bay-wallpaper.jpg",
       state_country: "South Africa",
        whatToDo: [" Boulders Beach", "Kirstenbosch National Botanical Garden",
        "Cape of Good Hope", "V&A Waterfront", "Two Oceans Aquarium"],
        placesToEat: ["Black Sheep Restaurant","Chefs Warehouse and Canteen", "The Pot Luch Club", "Reverie Social Table", "Signal"],
        whereToStay: [
          "AC Hotel by Marriott Cape Town Waterfront","Radisson Blu Hotel Waterfront, Cape Town","Southern Sun Waterfront Cape Town",
          "Hilton Cape Town City Centre","Gorgeous George Hotel"
        ]
    },
    {
      iid: 20,
      city: "Yellowstone National Park",
      img:"https://www.goodfreephotos.com/albums/united-states/wyoming/yellowstone-national-park/sunset-over-the-river-yellowstone-national-park-wyoming.jpg",
     state_country: "Wyoming",
      whatToDo: ["Thumb Geyser", "Perforated Pool",
      "Grant Village Campground", "Old Faithful", "Lewis Falls"],
      placesToEat: ["Canyon Village-General Store","Old Faithful General Store", "Old Faithful Basin Store",
      "Fishing Bridge-General Store"],
      whereToStay: [
        "Old Faithful Snow Lodge","Old Faithful Inn","Lake Lodge",
        "Lake Yellowstone Hotel","Old Faithful Lodge"
      ]
    },
    {
        id: 21,
        city: "Amsterdam",
        img:"https://www.bestwestern.nl/images/destinations/amsterdam-1150319_1920.jpg.pagespeed.ce.i-Cg31e7QG.jpg",
       state_country: "Netherlands",
        whatToDo: ["Rijksmuseum", "Vondelpark",
        "Van Gogh Museum", "ARTIS", "Anne Frank House"],
        placesToEat: ["de Silveren Spiegel","Restaurant Moeders", "Spectrum(preiously Librije's Zusje)",
        "De Kas", "Restaurant Senses by Lars Bertelsen"],
        whereToStay: [
          "Hotel Not Hotel","Mr Jordaan Hotel","Cocomama",
          "Motel One Amsterdam","Prnsenstede Lodging Amsterdam"
        ]
    },
    {
        id: 22,
        city: "Hong Kong",
        img:"https://isorepublic.com/wp-content/uploads/2018/11/hong-kong-1100x733.jpg",
       state_country: "China",
        whatToDo: ["Tian Tan Buddha", "Po Lin Monastery",
        "Hong Kong Disneyland", "Ocean Park", "Victoria Harbour"],
        placesToEat: ["Dynasty Restaurant","Yan Toh Heen", "Tin Lung Heen",
        "One Dim Sum", "Man Wah"],
        whereToStay: [
          "Cordis, Hong Kong","InterContinental Hong Kong","Grand Hyatt Hong Kong",
          "Renaissance Hong Kong Harbour View Hotel","Harbour Grand Hong Kong"
        ]
    },
    {
        id: 23,
        city: "Cairo",
        img:"https://foodimentaryguy.files.wordpress.com/2017/04/egypt-2133951_1920.jpg?w=880",
       state_country: "Egypt",
        whatToDo: ["Khan el-Khalili", "Cairo Tower",
        "Prince Mohamed Ali Palace", "The Hanging Church", "Al Azhar Park"],
        placesToEat: ["Zooba","The Grill", "Osmanly",
        "Sabaya", "Abou Tarek"],
        whereToStay: [
          "Four Seasons Hotel Cairo at Nile Plaza","The Nile Ritz-Carlton, Cairo","Cairo Marriott Hotel and Omar Khayyam Casino","InterContinental Cairo Semiramis","Kempinski Nile Hotel Garden City Cairo"
        ]
    },
    {
        id: 24,
        city: "Bali",
        img:"https://tripsy-main.s3-eu-west-1.amazonaws.com/gallery/4/7c4c012cec1a0347847264ac413fca7a.jpg",
       state_country: "Indonesia",
        whatToDo: ["Tanah Lot", "Balian Beach",
        "Bunut Bolong", "Jatiluwih Rice Terrace", "Ulun Danu Beratan Temple"],
        placesToEat: ["Restaurant Locavore","Mejekawi", "Mauri Restaurant",
        "Kubu at Mandapa", "Naughty Nuri's Seminyak"],
        whereToStay: [
          "The Kayon Resort Ubud by Pramana","W. Bali-Seminyak","Padma Resort Ubud",
          "Viceroy Bali","Munduk Moding Plantation Nature Resort and Spa"
        ]
    },
    {
        id: 25,
        city: "Prague",
        img:"https://d36tnp772eyphs.cloudfront.net/blogs/1/2017/08/prague-1168302_1920.jpg",
       state_country: "Czech Republic",
        whatToDo: ["Prague Castle", "Vysehrad",
        "St Vitus Cathedral", "Charles Bridge", "Church of Our Lady Victorious and the Infant Jesus of Prague"],
        placesToEat: ["Lokal","Krcma", "Restaurant Mlynec",
        "Taaj Palace-Indian Restaurant", "Czech Slovak Restaurant Lounge Bar"],
        whereToStay: [
          "Four Seasons Hotel Prague","Aria Hotel Prague","Le Palais Art Hotel Prague",
          "Mandarin Oriental, Prague","Hilton Prague"
        ]

    }
  ];
  
  export default data;