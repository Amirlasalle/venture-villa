const places = [
    {
      id: 1,
      owner: "John Doe",
      title: "Cozy Cottage",
      address: "123 Main St",
      photos: "https://www.bhg.com/thmb/jQc37LcCCU0MtUV2x3ZvGXJCVmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-home-exterior-bay-windows-black-door-fe006519-caa21acb28d1457bb8eb0c4ae8b0dd54.jpg",
        
        
      
      perks: ["Free Wi-Fi", "Swimming Pool"],
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 4,
      price: 100,
    },
    {
      id: 2,
      owner: "Jane Smith",
      title: "Luxury Villa",
      address: "456 Elm St",
      photos: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-Villas-In-Las-Vegasepb0310.jpg",
        
      
      perks: ["Ocean View", "Gym"],
      checkIn: "4:00 PM",
      checkOut: "10:00 AM",
      maxGuests: 8,
      price: 300,
    },
    {
        id: 3,
      owner: "Michael Johnson",
      title: "Rustic Cabin",
      address: "789 Oak Ave",
      photos: "https://i.pinimg.com/originals/f9/4a/38/f94a38fb1ac9e2133e9e20b269a23837.jpg",
       
      
      perks: ["Fireplace", "Hiking Trails"],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      maxGuests: 6,
      price: 150,
    },
    {
        id: 4,
      owner: "Emily Wilson",
      title: "Beachfront Bungalow",
      address: "10 Sandy Beach Rd",
      photos: "https://www.awaygowe.com/wp-content/uploads/2021/10/best-overwater-bungalows-maldives-soneva-jani.jpg",
       
      
      perks: ["Private Beach Access", "Outdoor Barbecue"],
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 2,
      price: 200,
    },
    {
        id: 5,
      owner: "David Brown",
      title: "City View Apartment",
      address: "15 Downtown Blvd",
      photos: "https://www.bookeens.com/assets_user/apartment_photo/photo_4318.jpg",
       
      
      perks: ["Balcony", "Fitness Center"],
      checkIn: "4:00 PM",
      checkOut: "10:00 AM",
      maxGuests: 3,
      price: 80,
    },
    {
      id: 6,
      owner: "Sophia Martinez",
      title: "Mountain Retreat",
      address: "20 Pine Valley Dr",
      photos: "https://na.rdcpix.com/1440298005/1a891d2319ee359502ef7d0c2408b398w-c150883xd-w640_h480_q80.jpg",
        
      perks: ["Scenic Views", "Hot Tub"],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      maxGuests: 10,
      price: 250,
    },
    {
        id: 7,
      owner: "James Davis",
      title: "Historic Mansion",
      address: "30 Heritage Lane",
      photos: "https://upload.travelawaits.com/ta/uploads/2021/04/kykuit-the-rockefeller-estat8fc178-1024x684.jpg",
        
      
      perks: ["Grand Ballroom", "Gardens"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 12,
      price: 500,
    },
    {
        id: 8,
      owner: "Olivia Johnson",
      title: "Lake House",
      address: "40 Lakeside Dr",
      photos: "https://calderasprings.com/wp-content/uploads/2021/08/Top-lakehouse-1.jpg",
        
      perks: ["Boat Dock", "Fishing"],
      checkIn: "3:00 PM",
      checkOut: "10:00 AM",
      maxGuests: 6,
      price: 180,
    },
    {
       id: 9,
      owner: "Daniel Thompson",
      title: "Ski Chalet",
      address: "50 Snowy Mountain Rd",
      photos: "https://robbreport.com/wp-content/uploads/2019/11/ch_120396_swissalps_chaletlesetrennes_000_webhero_357_ret-1.jpg?w=1000",
       
      perks: ["Ski-In/Ski-Out", "Hot Chocolate Bar"],
      checkIn: "4:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 8,
      price: 300,
    },
    {
        id: 10,
      owner: "Ava Harris",
      title: "Secluded Cottage",
      address: "60 Whispering Woods Ln",
      photos: "https://the-travel-life.com/wp-content/uploads/2022/12/Screenshot-2022-12-20-114723.png",
       
      perks: ["Peaceful Surroundings", "Outdoor Fire Pit"],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      maxGuests: 4,
      price: 120,
    },
    {
        id: 11,
      owner: "Matthew Rodriguez",
      title: "Tropical Paradise",
      address: "70 Palm Beach Blvd",
      photos: "https://www.compass.com/m/9969bc5450ff046cd7f04f3c63de78cc6040acfe_img_0_2697d/origin.jpg",
       
      perks: ["Swimming Pool", "Palm Trees"],
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 6,
      price: 220,
    },
    {
        id: 12,
      owner: "Sofia Lee",
      title: "Riverside Cabin",
      address: "80 River View Rd",
      photos: "https://bellavistavacationrental.com/wp-content/uploads/elk-river-cabin-rental.jpg",
        
      perks: ["River Access", "Outdoor Dining"],
      checkIn: "4:00 PM",
      checkOut: "10:00 AM",
      maxGuests: 5,
      price: 160,
    },
    {
       id: 13,
      owner: "Ethan Clark",
      title: "Urban Loft",
      address: "90 Loft Avenue",
      photos: "https://www.urbanlofts.com/wp/wp-content/uploads/2019/11/img-19-710x375.jpg",
        
      perks: ["Open Floor Plan", "City Skyline Views"],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      maxGuests: 2,
      price: 150,
    },
    {
        id: 14,
      owner: "Mia Turner",
      title: "Countryside Farmhouse",
      address: "100 Meadow Lane",
      photos: "https://www.redfin.com/blog/wp-content/uploads/2022/11/farmhouse-1.jpg",
        
      perks: ["Farm Animals", "Fresh Air"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 8,
      price: 180,
    },
    {
        id: 15,
      owner: "William Baker",
      title: "Desert Retreat",
      address: "110 Cactus Blvd",
      photos: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/283364853.jpg?k=1eace74ec23a6ab123f0071395133bfaeef3f62ddd91d2ff081d870ebdd39beb&o=",
      perks: ["Sunset Views", "Stargazing"],
      checkIn: "3:00 PM",
      checkOut: "10:00 AM",
      maxGuests: 4,
      price: 120,
    },
    {
        id: 16,
      owner: "Amelia Carter",
      title: "Island Getaway",
      address: "120 Paradise Island",
      photos: "https://cdn.shortpixel.ai/spai/w_1124+q_lossy+ret_img+to_webp/https://www.islands.com/wp-content/uploads/sites/13/2021/09/four-seasons-bora-bora-2.jpg",
      perks: ["Beachfront", "Snorkeling"],
      checkIn: "4:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 10,
      price: 280,
    },
    {
        id: 17,
      owner: "Henry Green",
      title: "Country Estate",
      address: "130 Rolling Hills Rd",
      photos: "https://s.wsj.net/public/resources/images/B3-FV352_Grondi_M_20200107140149.jpg",
      perks: ["Private Tennis Court", "Pool House"],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      maxGuests: 12,
      price: 400,
    },
    {
      id: 18,
      owner: "Evelyn Adams",
      title: "Lakefront Cabin",
      address: "140 Lakeview Lane",
      photos: "https://www.myglobalviewpoint.com/wp-content/uploads/2021/07/New-York-Lake-House-Rentals-Featured-Image.jpg",
        
      
      perks: ["Lake Access", "Fishing Gear"],
      checkIn: "3:00 PM",
      checkOut: "10:00 AM",
      maxGuests: 6,
      price: 160,
    },
    {
        id: 19,
      owner: "Daniel Walker",
      title: "Modern Penthouse",
      address: "150 High Street",
      photos: "https://www.jamesedition.com/stories/wp-content/uploads/2020/10/18.jpg",
        
      
      perks: ["Panoramic Views", "Rooftop Terrace"],
      checkIn: "4:00 PM",
      checkOut: "11:00 AM",
      maxGuests: 4,
      price: 200,
    },
  ];
  
  export default places;
  