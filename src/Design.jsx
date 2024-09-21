
import React, { useState, useEffect } from 'react';
import './Design.css'; // Ensure to include your styles
import Navbar from './Navbar';
import Footer from './footer';
const imagesData = {
    // Include the imagesData object here
    all: [
        
      {
        src: 'https://i.pinimg.com/474x/5e/52/33/5e523396d97fddf5d19f34329da83bbe.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a gold-colored metal frame with multiple glass globes that resemble bubbles. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/474x/a2/44/93/a244939c1f60cb0334ebd829037a3c63.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, eclectic dining room design with a bold color palette. The dining room features a dark blue accent wall adorned with a large, tropical-themed mural. A wooden dining table and green upholstered chairs create a cozy and inviting atmosphere. The room is adorned with a statement-making chandelier and curtains with a tropical print. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/474x/09/b6/5f/09b65f9ba22e9a314d059b814e7d62a3.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a coffee table, and a built-in entertainment center with a TV. The ceiling is adorned with decorative lighting, and the walls are painted a neutral color. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: ' https://i.pinimg.com/564x/08/6d/fb/086dfb4f965aa767d64a5ede2199ca11.jpg ',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, minimalist kitchen design with a white and gray color palette. The kitchen features sleek, white cabinetry with integrated handles, complemented by a dark gray stone backsplash. A large, white marble countertop island dominates the center of the room, and stainless steel appliances complement the modern aesthetic. The Products used for this kitchen design are; Cabinets, Countertops, Appliances, Dishwasher, Sink, Lighting, Flooring, Backsplash, Electric stove, Faucet, Refrigerator. Estimated Cost: $25,000 - $35,000 USD.',
    },
    {
        src: 'https://i.pinimg.com/474x/37/e4/e9/37e4e9189da76513e09b63938d5164fe.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a coffee table, and a TV stand. The ceiling is adorned with a unique chandelier, and the walls are painted a neutral color.Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/474x/e9/c5/1a/e9c51a18c70af8e3711f00089a4b6561.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a neutral color palette. The bathroom features a floating vanity with a curved countertop and a rectangular under-mount sink. A large, asymmetrical mirror with integrated lighting hangs above the vanity, and the walls are adorned with decorative niches and recessed lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $1,500 - $3,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/e9/8b/9a/e98b9a4a760cbd00887d842da1b67f71.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, rustic bedroom design with a green color palette. The bedroom features dark wood paneling on the walls and ceiling, complemented by a sage green accent wall. A large bed with a green duvet and a wooden bench are placed in the center of the room. The bedroom is adorned with subtle decorative elements, such as a painting and a vase of flowers. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $1,000 - $3,000',
    },
    {
        src: 'https://i.pinimg.com/474x/c9/50/59/c9505967bca9deb510eaf0339c98d867.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a dark color palette. The bathroom features dark, possibly black or navy, cabinetry and a freestanding bathtub. The walls are adorned with wood paneling, and the ceiling features recessed lighting with a strip of indirect lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/9f/b9/ef/9fb9ef638bbd8444047eb668138d2af7.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Contemporary Design',
        description: ' Products used are: cabinet, wood. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/474x/fd/65/98/fd6598446093c063582e289facf149fe.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist kitchen cabinet with a pull-out design. The cabinet features multiple shelves for storage and a sleek black finish. A small potted plant adds a touch of greenery. Products used: Maxima Soft-Close Kitchen Pull-Out Larder Puro. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/2c/79/c4/2c79c4338f91d561a2d3884d7fe7eae6.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, contemporary sofa set with a curved design and plush cushions. The sofa set features a chaise section for added comfort and a neutral color palette. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    }, 
    {
        src: 'https://i.pinimg.com/474x/9f/b9/ef/9fb9ef638bbd8444047eb668138d2af7.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist wardrobe with a neutral color palette. The wardrobe features sliding doors, multiple shelves and drawers for storage, and integrated lighting. The doors have sleek handles with a minimalist design.  Product used:Modern Minimalist Wardrobe with Sliding Doors Estimated Cost: $2,000 - $4,000 USD',
    }, 
    {
        src: 'https://i.pinimg.com/474x/52/0c/a8/520ca848b6ce8c8c8ef4be91b6164106.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a white kitchen island cart with a natural wood butcher block top. The cart features a cabinet with a door, three drawers, and a small open shelf for storage. It also has caster wheels for easy mobility. The Products used for this kitchen design are; Cabinets, Open Shelf, Caster Wheels, Drawers, Top. Estimated Cost: $50 - $100 USD. ',
    },
    {
        src: 'https://i.pinimg.com/474x/f3/cf/76/f3cf763874dd2cd725338e71e45e54e4.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, luxurious bathroom design with a dark and white color palette. The bathroom features dark, possibly black or navy, cabinetry and a freestanding bathtub. The walls are adorned with white marble tiles, and a glass shower enclosure separates the shower area from the rest of the bathroom. The bathroom is adorned with plants and a black towel rack. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $5,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/ab/f7/57/abf7570c4d918fc8a5fbda63c9fe291f.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a neutral color palette. The bedroom features a large bed with a padded headboard and a wooden footboard. A feature wall behind the bed is adorned with decorative panels and LED lighting. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a plant.  Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/10/78/06/107806fa0f72123c499918fd8c29a4cc.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist reception desk with a curved design and a light beige color. The desk features a curved front panel and a built-in countertop with space for a computer and other office supplies. The desk is illuminated by recessed lighting and a decorative wall light above. Product used: Brayden Studio Bonnibelle 2 Person Rectangular Laminate Reception Desk Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/564x/e7/c3/d6/e7c3d6d2fde8a2f1923078f19392d9c6.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'The image showcases a pair of decorative wall sconces with a circular design and a mountain landscape cutout. The sconces feature LED lights that illuminate the cutout, creating a striking visual effect.  Product used: Modern Mountain Landscape Wall Sconces. Estimated Cost: $100 - $500 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/b2/74/48/b274485e2a902cae0b68fb42cb3839ac.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Living-room Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/72/bd/94/72bd944c4a533aa88d3e155abd6c2724.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Kitchen Design',
        description: ' Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/736x/0e/a4/63/0ea463ba07322b0805275547fb7aa7fb.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/564x/8c/4c/ff/8c4cffe86d986d2c9168d153d9f3c131.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Bedroom Design',
        description: ' Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/474x/12/0c/37/120c371edbacb174feed15be41db7be3.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Contemporary Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/39/d8/be/39d8be077020a2a4c7d630c498dbf81f.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'An Elegant Design',
        description: ' Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/474x/b2/74/48/b274485e2a902cae0b68fb42cb3839ac.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a statement wall with an abstract leaf pattern wallpaper, a comfortable armchair, and a round coffee table. The room is adorned with subtle decorative elements, such as a floor lamp, a vase of flowers, and a throw pillow. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/564x/ee/83/79/ee83791a2ee34333b5341134b62efe5d.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, luxurious kitchen design with a striking black and white color palette. The kitchen features a large, white marble countertop island with a waterfall edge, complemented by black cabinetry and a black coffered ceiling. A large television is mounted above the island, and a statement-making chandelier hangs overhead. The Products used for this kitchen design are; Cabinets, Countertops, Appliances, Sink, Lighting, Flooring, Backsplash, Electric stove. Estimated Cost: $20,000 - $40,000 USD.',
    },
    {
        src: ' https://i.pinimg.com/474x/10/e1/8f/10e18fbd7eb45823faabba63980f647e.jpg',
        alt: '',
        category: 'bathroom',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a blue and white color palette. The bathroom features white cabinetry with a floating vanity, a blue subway tile backsplash, and a freestanding bathtub. A shower with a black frame is enclosed by a glass door. The bathroom is adorned with subtle decorative elements, such as a small plant and a shelf with toiletries. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/54/fa/1e/54fa1e53266990ee88f605926ab97221.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a dark color palette. The bedroom features a large bed with a padded headboard and a low-profile frame. A feature wall behind the bed is adorned with textured wallpaper and circular LED lights. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/84/09/58/840958763c67dc02d56758bd47c14759.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a gold-colored metal frame with multiple circular rings that intersect at the center. The rings are adorned with LED lights that create a sparkling effect. Product used: Modern Circular LED Chandelier. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/564x/65/0c/4f/650c4fe7e86992840c0c2f6ced2973b1.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a curved sofa set, a round coffee table, and an arched accent wall with recessed lighting. The room is adorned with subtle decorative elements, such as throw pillows and a vase of flowers. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
    },
    {
        src: 'https://i.pinimg.com/474x/e3/a3/3b/e3a33bca757ef0e217860dcbc1acd09e.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a pair of modern abstract artworks featuring geometric shapes and neutral tones. The artworks are framed and displayed side-by-side on a wall. Product used: Modern Abstract Wall Art; Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/99/4c/ef/994cefa92ec28de74e62a9a9d685e3a5.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, minimalist kitchen design with a neutral color palette. The kitchen features white cabinetry with a wood-grain finish, complemented by a white quartz countertop and a white subway tile backsplash. A stainless steel range and hood are installed above the countertop. The kitchen is adorned with subtle decorative elements, such as a wooden cutting board and a small basket of lemons. The Products used for this kitchen design are; Cabinets, Countertop, Backsplash, Range and Hood, Decorative Elements. Estimated Cost: $15,000 - $25,000 USD. ',
    },
    {
        src: 'https://i.pinimg.com/474x/71/16/0a/71160ad8e717c89caa09fa2b51032d86.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a green and brown color palette. The bathroom features dark brown cabinetry with a floating vanity, a green subway tile backsplash, and a freestanding toilet. The walls are adorned with decorative wood paneling, and the ceiling features recessed lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    ],
    livingroom: [
      {
        src: 'https://i.pinimg.com/564x/a0/f3/b8/a0f3b865ff16bb7c7634223fe6c4b33b.jpg',
        alt: '',
        category: 'livingroom',
        preview: 'A Living-room Design',
        description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a round coffee table, and a curved accent wall with recessed lighting. The room is adorned with subtle decorative elements, such as throw pillows and a vase of flowers. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000.',
    },
   {
       src: 'https://i.pinimg.com/474x/a2/44/93/a244939c1f60cb0334ebd829037a3c63.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, eclectic dining room design with a bold color palette. The dining room features a dark blue accent wall adorned with a large, tropical-themed mural. A wooden dining table and green upholstered chairs create a cozy and inviting atmosphere. The room is adorned with a statement-making chandelier and curtains with a tropical print. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/09/b6/5f/09b65f9ba22e9a314d059b814e7d62a3.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a coffee table, and a built-in entertainment center with a TV. The ceiling is adorned with decorative lighting, and the walls are painted a neutral color. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/ca/9d/43/ca9d436ba3d234d6b4739594a536807d.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a central hub with radiating arms that resemble fireworks. The arms are adorned with small LED lights that create a sparkling effect. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/564x/65/0c/4f/650c4fe7e86992840c0c2f6ced2973b1.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a curved sofa set, a round coffee table, and an arched accent wall with recessed lighting. The room is adorned with subtle decorative elements, such as throw pillows and a vase of flowers. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/37/e4/e9/37e4e9189da76513e09b63938d5164fe.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a coffee table, and a TV stand. The ceiling is adorned with a unique chandelier, and the walls are painted a neutral color.Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/2c/79/c4/2c79c4338f91d561a2d3884d7fe7eae6.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, contemporary sofa set with a curved design and plush cushions. The sofa set features a chaise section for added comfort and a neutral color palette. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   }, 
      {
       src: 'https://i.pinimg.com/474x/5e/52/33/5e523396d97fddf5d19f34329da83bbe.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a gold-colored metal frame with multiple glass globes that resemble bubbles. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/e2/71/47/e271474a79b929d80c2eaff03c56eeb4.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a round coffee table, and a statement artwork above the sofa. The room is adorned with subtle decorative elements, such as a throw blanket, a vase of dried flowers, and a floor lamp. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/b2/74/48/b274485e2a902cae0b68fb42cb3839ac.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a statement wall with an abstract leaf pattern wallpaper, a comfortable armchair, and a round coffee table. The room is adorned with subtle decorative elements, such as a floor lamp, a vase of flowers, and a throw pillow. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/8d/60/ec/8d60ec76438b2d71d14c6cbedb2edb1d.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a round coffee table, and an accent wall with decorative panels and recessed lighting. The room is adorned with subtle decorative elements, such as a vase of flowers and a throw pillow. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/b8/29/65/b82965b8c1e661b40685e7d09bd865f8.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a gold-colored metal frame with multiple circular rings that intersect at the center. The rings are adorned with LED lights that create a sparkling effect. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/fe/c3/a3/fec3a394cf54f474ab5bb2e70c6b1112.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, luxurious sofa set with a beige leather exterior and gold metal accents. The sofa set includes a sectional sofa, two armchairs, and a coffee table. The design is characterized by clean lines and a minimalist aesthetic. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/4a/dd/a8/4adda84779b358e6ae56354de6b3fb25.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a coffee table, and a built-in electric fireplace. The fireplace is flanked by shelves for displaying decorative items. The room is adorned with subtle decorative elements, such as throw pillows and a vase of flowers.            Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/9e/d3/54/9ed354c88b3c62f030ec6bbb963127ce.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a large, sectional sofa, a coffee table, and a statement piece of artwork above the sofa. The room is adorned with subtle decorative elements, such as throw pillows, a vase of flowers, and a pouf. Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
   {
       src: 'https://i.pinimg.com/474x/fb/b6/51/fbb6513922766334eb3c776c8b3cfa5d.jpg',
       alt: '',
       category: 'livingroom',
       preview: 'A Living-room Design',
       description: ' Products used are: Sofa, Coffee Table, Accent Wall, Curtains, Decor. Estimated Cost: $1,500 - $3,000..',
   },
    ],
    Bedroom:[
      {
        src: 'https://i.pinimg.com/474x/e9/8b/9a/e98b9a4a760cbd00887d842da1b67f71.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, rustic bedroom design with a green color palette. The bedroom features dark wood paneling on the walls and ceiling, complemented by a sage green accent wall. A large bed with a green duvet and a wooden bench are placed in the center of the room. The bedroom is adorned with subtle decorative elements, such as a painting and a vase of flowers. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $1,000 - $3,000',
    },
    {
        src: '  https://i.pinimg.com/474x/d4/da/16/d4da16553ce03854778487ebb08a6b93.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, contemporary ceiling light fixture with a flower-like design. The fixture features a gold-colored metal frame with LED lights that create a warm, ambient glow. Product used: TOMAX Lighting. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/ab/f7/57/abf7570c4d918fc8a5fbda63c9fe291f.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a neutral color palette. The bedroom features a large bed with a padded headboard and a wooden footboard. A feature wall behind the bed is adorned with decorative panels and LED lighting. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a plant.  Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: ' https://i.pinimg.com/564x/8c/4c/ff/8c4cffe86d986d2c9168d153d9f3c131.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a dark color palette. The bedroom features a large bed with a floating frame and a dark gray headboard. A striking feature wall behind the bed features a large, moon-shaped artwork. The bedroom is adorned with subtle decorative elements, such as a throw pillow and a table lamp. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/0e/41/fe/0e41feecda496658d5701500226acf8c.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a neutral color palette. The bedroom features a large bed with a curved headboard and a wooden base. A feature wall behind the bed is adorned with decorative panels and LED lighting. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/02/ad/81/02ad81ef0af4a2873d3312817234418c.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a neutral color palette. The bedroom features a large bed with a padded headboard and a wooden footboard. A striking chandelier hangs from the ceiling, adding a touch of luxury. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/54/fa/1e/54fa1e53266990ee88f605926ab97221.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a dark color palette. The bedroom features a large bed with a padded headboard and a low-profile frame. A feature wall behind the bed is adorned with textured wallpaper and circular LED lights. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/61/bd/7a/61bd7a5e3824582d3e85ed5b41cb92f3.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, upholstered bed frame with a black faux leather exterior and gold metal accents. The bed frame features a tall headboard with vertical stripes and gold-toned nailheads. Products used are: TTVIEW Modern Faux Leather Upholstered Platform Bed Frame with Golden Iron Metal Decor. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/d6/af/2e/d6af2efa67d28edf33e3909f6628b68f.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a dark color palette. The bedroom features a large bed with a padded headboard and a low-profile frame. A feature wall behind the bed is adorned with vertical panels and pendant lights. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/0d/f5/e4/0df5e48b723d516df906ab30a94cecf7.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a blue and gray color palette. The bedroom features a large bed with a tufted headboard and a low-profile frame. A feature wall behind the bed is adorned with triangular panels upholstered in a teal fabric. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/7a/f6/50/7af6503087869dfda72ccb2fa3003f12.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a neutral color palette. The bedroom features a large bed with a padded headboard and a low-profile frame. A feature wall behind the bed is adorned with geometric patterns and recessed lighting. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps.  Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/df/84/c8/df84c828ba56194f0c4b702ab8878662.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/26/1c/08/261c08cb58c0104ad960347aef4ff9cb.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/50/f7/68/50f768f23e44e39b95543a3192b84c44.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, minimalist bedroom design with a neutral color palette. The bedroom features a large bed with a padded headboard and a low-profile frame. A feature wall behind the bed is adorned with geometric patterns and recessed lighting. The bedroom is adorned with subtle decorative elements, such as a throw blanket and a pair of table lamps. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $2,000 - $4,000 USD',
    },

    {
        src: 'https://i.pinimg.com/474x/23/37/f8/2337f8f7103e84600cb3ef48d4261dc9.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bedroom Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/e9/8b/9a/e98b9a4a760cbd00887d842da1b67f71.jpg',
        alt: '',
        category: 'bedroom',
        preview: 'A Bedroom Design',
        description: 'The image showcases a modern, rustic bedroom design with a green color palette. The bedroom features dark wood paneling on the walls and ceiling, complemented by a sage green accent wall. A large bed with a green duvet and a wooden bench are placed in the center of the room. The bedroom is adorned with subtle decorative elements, such as a painting and a vase of flowers. Products used are: Wall Paneling, Accent Wall, Bed, Bench, Nightstands. Estimated Cost: $1,000 - $3,000',
    },
    ],
    kitchen: [
      {
        src: 'https://i.pinimg.com/564x/ee/83/79/ee83791a2ee34333b5341134b62efe5d.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, luxurious kitchen design with a striking black and white color palette. The kitchen features a large, white marble countertop island with a waterfall edge, complemented by black cabinetry and a black coffered ceiling. A large television is mounted above the island, and a statement-making chandelier hangs overhead. The Products used for this kitchen design are; Cabinets, Countertops, Appliances, Sink, Lighting, Flooring, Backsplash, Electric stove. Estimated Cost: $20,000 - $40,000 USD.',
    },
    {
        src: 'https://i.pinimg.com/474x/25/62/a1/2562a123dfd39a03d422b3ebb5a62c76.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, luxurious kitchen design with a neutral color palette. The kitchen features sleek, high-gloss beige cabinetry, complemented by a white marble countertop and backsplash. A stainless steel range and hood, along with a double oven, dominate the cooking area. The kitchen is adorned with subtle decorative elements, such as a small plant and a ceramic jar. The Products used for this kitchen design are; Cabinets, Countertops, Appliances, Sink, Lighting, Flooring, Backsplash, Electric stove, Faucet, Refrigerator. Estimated Cost: $20,000 - $35,000 USD.',
    },
    {
        src: 'https://i.pinimg.com/474x/b8/df/6d/b8df6d894b54d5ecc94893f1a6d2aef4.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, luxurious kitchen design with a dark color palette. The kitchen features dark, possibly black or navy, cabinetry with glass doors and gold hardware. A large white marble countertop island dominates the center of the room, and a stainless steel refrigerator and range complement the modern aesthetic. The Products used for this kitchen design are; Cabinets, Countertops, Appliances, Sink, Lighting, Flooring, Backsplash, Electric stove, Faucet, Refrigerator. Estimated Cost: $25,000 - $40,000 USD.',
    },
    {
        src: ' https://i.pinimg.com/564x/08/6d/fb/086dfb4f965aa767d64a5ede2199ca11.jpg ',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, minimalist kitchen design with a white and gray color palette. The kitchen features sleek, white cabinetry with integrated handles, complemented by a dark gray stone backsplash. A large, white marble countertop island dominates the center of the room, and stainless steel appliances complement the modern aesthetic. The Products used for this kitchen design are; Cabinets, Countertops, Appliances, Dishwasher, Sink, Lighting, Flooring, Backsplash, Electric stove, Faucet, Refrigerator. Estimated Cost: $25,000 - $35,000 USD.',
    },
    {
        src: 'https://i.pinimg.com/474x/52/0c/a8/520ca848b6ce8c8c8ef4be91b6164106.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a white kitchen island cart with a natural wood butcher block top. The cart features a cabinet with a door, three drawers, and a small open shelf for storage. It also has caster wheels for easy mobility. The Products used for this kitchen design are; Cabinets, Open Shelf, Caster Wheels, Drawers, Top. Estimated Cost: $50 - $100 USD. ',
    },

    {
        src: 'https://i.pinimg.com/474x/99/4c/ef/994cefa92ec28de74e62a9a9d685e3a5.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, minimalist kitchen design with a neutral color palette. The kitchen features white cabinetry with a wood-grain finish, complemented by a white quartz countertop and a white subway tile backsplash. A stainless steel range and hood are installed above the countertop. The kitchen is adorned with subtle decorative elements, such as a wooden cutting board and a small basket of lemons. The Products used for this kitchen design are; Cabinets, Countertop, Backsplash, Range and Hood, Decorative Elements. Estimated Cost: $15,000 - $25,000 USD. ',
    },
    {
        src: 'https://i.pinimg.com/474x/89/82/70/898270e877419361789ec5052351001f.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, minimalist kitchen design with a warm color palette. The kitchen features light-toned wood cabinetry and a natural stone backsplash. A large, wooden island with a waterfall edge dominates the center of the room, and a series of pendant lights hang overhead. The kitchen is adorned with subtle decorative elements, such as a vase of flowers and a wooden cutting board.  The Products used for this kitchen design are; Cabinets, Faucet, Pendant Lights, CountertopTop, Refrigerator. Estimated Cost: $25,000 - $45,000 USD.',
    },
    {
        src: 'https://i.pinimg.com/474x/72/bd/94/72bd944c4a533aa88d3e155abd6c2724.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, industrial-style kitchen design with a dark color palette. The kitchen features dark, possibly black or navy, cabinetry with metal accents. A rustic wooden island dominates the center of the room, and pendant lights with exposed bulbs hang overhead. The kitchen is adorned with subtle decorative elements, such as a vase of dried flowers and a wooden stool. The Products used for this kitchen design are; Cabinets, Faucet, Pendant Lights, CountertopTop, Refrigerator. Estimated Cost: $25,000 - $40,000 USD.',
    },
    {
        src: 'https://i.pinimg.com/474x/9e/d4/f0/9ed4f0913460a692b06a4f6f558b64bb.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, luxurious kitchen design with a dark color palette. The kitchen features dark, possibly black or navy, cabinetry with sleek, metallic accents. A white marble countertop contrasts beautifully with the dark cabinetry. The kitchen is adorned with subtle decorative elements, such as a vase of flowers and a wine rack.',
    },
    {
        src: 'https://i.pinimg.com/474x/a9/f9/93/a9f993e2c49fdea25a82cd04f783d072.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/cc/b1/3a/ccb13aeb4346c0826a0058f62491ae9f.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'This kitchen design showcases a modern minmalist aesthetic with a touch of warmth form the wood accents. The open-play layout creates a spacious and inviting atmosphere, perfect for both cooking and entertaining. The island, with its white countertop and dark base, provides ample workspace and seating. The Products used for this kitchen design are; Cabinets, Countertops, Appliances, Sink, Lighting, Flooring, Backsplash. Estimated Cost: $30,000 - $50,000 USD.',
    },
    {
        src: 'https://i.pinimg.com/474x/89/82/70/898270e877419361789ec5052351001f.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Kitchen Design',
        description: 'The image showcases a modern, minimalist kitchen design with a warm color palette. The kitchen features light-toned wood cabinetry and a natural stone backsplash. A large, wooden island with a waterfall edge dominates the center of the room, and a series of pendant lights hang overhead. The kitchen is adorned with subtle decorative elements, such as a vase of flowers and a wooden cutting board.  The Products used for this kitchen design are; Cabinets, Faucet, Pendant Lights, CountertopTop, Refrigerator. Estimated Cost: $25,000 - $45,000 USD.',
    },
    ],
    bathroom: [
      {
        src: 'https://i.pinimg.com/474x/c9/50/59/c9505967bca9deb510eaf0339c98d867.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a dark color palette. The bathroom features dark, possibly black or navy, cabinetry and a freestanding bathtub. The walls are adorned with wood paneling, and the ceiling features recessed lighting with a strip of indirect lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/236x/1b/4f/dd/1b4fdd6bc731b6f270c2f003507b4574.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a dark color palette. The bathroom features dark, possibly black or navy, cabinetry and a freestanding bathtub. The walls are adorned with dark, textured tiles, and the ceiling features recessed lighting.  Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/736x/0e/a4/63/0ea463ba07322b0805275547fb7aa7fb.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a dark color palette. The bathroom features dark, possibly black or navy, cabinetry with a floating vanity. A large, rectangular mirror with integrated lighting hangs above the vanity, and a gray marble countertop complements the dark cabinetry.  Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $5,000 - $10,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/64/c1/0f/64c10f6801f3d0166c51c30cde7a1584.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a neutral color palette. The bathroom features a floating vanity with a wooden countertop and a rectangular under-mount sink. A large, rectangular mirror with integrated lighting hangs above the vanity, and the walls are adorned with light-colored tiles. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $1,500 - $3,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/e9/c5/1a/e9c51a18c70af8e3711f00089a4b6561.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a neutral color palette. The bathroom features a floating vanity with a curved countertop and a rectangular under-mount sink. A large, asymmetrical mirror with integrated lighting hangs above the vanity, and the walls are adorned with decorative niches and recessed lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $1,500 - $3,000 USD',
    },
    {
        src: ' https://i.pinimg.com/474x/10/e1/8f/10e18fbd7eb45823faabba63980f647e.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a blue and white color palette. The bathroom features white cabinetry with a floating vanity, a blue subway tile backsplash, and a freestanding bathtub. A shower with a black frame is enclosed by a glass door. The bathroom is adorned with subtle decorative elements, such as a small plant and a shelf with toiletries. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/f3/cf/76/f3cf763874dd2cd725338e71e45e54e4.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, luxurious bathroom design with a dark and white color palette. The bathroom features dark, possibly black or navy, cabinetry and a freestanding bathtub. The walls are adorned with white marble tiles, and a glass shower enclosure separates the shower area from the rest of the bathroom. The bathroom is adorned with plants and a black towel rack. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $5,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/71/16/0a/71160ad8e717c89caa09fa2b51032d86.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a green and brown color palette. The bathroom features dark brown cabinetry with a floating vanity, a green subway tile backsplash, and a freestanding toilet. The walls are adorned with decorative wood paneling, and the ceiling features recessed lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/a6/ed/7c/a6ed7ca544e01d578c64582d5fd03cce.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, luxurious bathroom design with a white and gold color palette. The bathroom features white marble walls and flooring, complemented by gold-toned fixtures and accents. A large, walk-in shower with a rainfall showerhead is enclosed by a glass door. The bathroom is adorned with subtle decorative elements, such as a shelf with toiletries and a plant. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/1d/04/47/1d04474072edd9be8860d4325c169cdc.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a neutral color palette. The bathroom features a freestanding bathtub, a shower with a glass door, and a floating vanity with a wooden countertop. The walls are adorned with light-colored tiles, and the ceiling features recessed lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/71/16/0a/71160ad8e717c89caa09fa2b51032d86.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a green and brown color palette. The bathroom features dark brown cabinetry with a floating vanity, a green subway tile backsplash, and a freestanding toilet. The walls are adorned with decorative wood paneling, and the ceiling features recessed lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/f4/90/c2/f490c224c1df4dfb8e08022edd16eda9.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/19/e2/1c/19e21c7d6da253a754396ce7359358c8.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/c6/f6/07/c6f6072d7f715f1400da5487f879ce2e.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/a6/ed/7c/a6ed7ca544e01d578c64582d5fd03cce.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, luxurious bathroom design with a white and gold color palette. The bathroom features white marble walls and flooring, complemented by gold-toned fixtures and accents. A large, walk-in shower with a rainfall showerhead is enclosed by a glass door. The bathroom is adorned with subtle decorative elements, such as a shelf with toiletries and a plant. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/1d/04/47/1d04474072edd9be8860d4325c169cdc.jpg',
        alt: '',
        category: 'kitchen',
        preview: 'A Bathroom Design',
        description: 'The image showcases a modern, minimalist bathroom design with a neutral color palette. The bathroom features a freestanding bathtub, a shower with a glass door, and a floating vanity with a wooden countertop. The walls are adorned with light-colored tiles, and the ceiling features recessed lighting. Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $2,000 - $4,000 USD',
    },
    ],
    contemporary: [
      {
        src: 'https://i.pinimg.com/474x/84/09/58/840958763c67dc02d56758bd47c14759.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a gold-colored metal frame with multiple circular rings that intersect at the center. The rings are adorned with LED lights that create a sparkling effect. Product used: Modern Circular LED Chandelier. Estimated Cost: $2,000 - $4,000 USD',
    },
       {
        src: 'https://i.pinimg.com/474x/e3/a3/3b/e3a33bca757ef0e217860dcbc1acd09e.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a pair of modern abstract artworks featuring geometric shapes and neutral tones. The artworks are framed and displayed side-by-side on a wall. Product used: Modern Abstract Wall Art; Estimated Cost: $2,000 - $4,000 USD',
    },
  
    {
        src: 'https://i.pinimg.com/474x/10/78/06/107806fa0f72123c499918fd8c29a4cc.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist reception desk with a curved design and a light beige color. The desk features a curved front panel and a built-in countertop with space for a computer and other office supplies. The desk is illuminated by recessed lighting and a decorative wall light above. Product used: Brayden Studio Bonnibelle 2 Person Rectangular Laminate Reception Desk Estimated Cost: $2,000 - $4,000 USD',
    },

    {
        src: 'https://i.pinimg.com/474x/9f/b9/ef/9fb9ef638bbd8444047eb668138d2af7.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist wardrobe with a neutral color palette. The wardrobe features sliding doors, multiple shelves and drawers for storage, and integrated lighting. The doors have sleek handles with a minimalist design.  Product used:Modern Minimalist Wardrobe with Sliding Doors Estimated Cost: $2,000 - $4,000 USD',
    }, 
    {
        src: 'https://i.pinimg.com/564x/19/b7/e3/19b7e3a8079389900aeab7983f0e0bdf.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a gold-colored metal frame with multiple circular rings that intersect at the center. The rings are adorned with LED lights that create a sparkling effect. Product used: Modern Circular LED Chandelier. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/12/0c/37/120c371edbacb174feed15be41db7be3.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a pair of decorative columns with a unique design. The columns feature a fluted texture and a light brown color. They are likely made of a wood or composite material. Product used: Fluted Decorative Columns. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/d8/b9/68/d8b968cc8dc48dbd5134f6536280c1a0.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, industrial-style interior design with a dark color palette. The space features exposed brick walls, a curved concrete ceiling, and unique pendant lights. The furniture is minimalist and includes a leather sofa, a coffee table, and a side table. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/b2/74/48/b274485e2a902cae0b68fb42cb3839ac.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist living room design with a neutral color palette. The living room features a statement wall with an abstract leaf pattern wallpaper, a comfortable armchair, and a round coffee table. The room is adorned with subtle decorative elements, such as a floor lamp, a vase of flowers, and a throw pillow. Products used: Wallpaper, Armchair, Coffee Table, Decor. Estimated Cost: $2,000 - $4,000 USD',
    },
            {
        src: 'https://i.pinimg.com/474x/fd/65/98/fd6598446093c063582e289facf149fe.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist kitchen cabinet with a pull-out design. The cabinet features multiple shelves for storage and a sleek black finish. A small potted plant adds a touch of greenery. Products used: Maxima Soft-Close Kitchen Pull-Out Larder Puro. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/564x/19/b7/e3/19b7e3a8079389900aeab7983f0e0bdf.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, contemporary chandelier with a unique design. The chandelier features a gold-colored metal frame with multiple circular rings that intersect at the center. The rings are adorned with LED lights that create a sparkling effect. Product used: Modern Circular LED Chandelier. Estimated Cost: $2,000 - $4,000 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/9f/b9/ef/9fb9ef638bbd8444047eb668138d2af7.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a modern, minimalist wardrobe with a neutral color palette. The wardrobe features sliding doors, multiple shelves and drawers for storage, and integrated lighting. The doors have sleek handles with a minimalist design.  Product used:Modern Minimalist Wardrobe with Sliding Doors Estimated Cost: $2,000 - $4,000 USD',
    }, 
    {
        src: 'https://i.pinimg.com/474x/e3/a3/3b/e3a33bca757ef0e217860dcbc1acd09e.jpg',
        alt: '',
        category: 'contemporary',
        preview: 'A Contemporary Design',
        description: 'The image showcases a pair of modern abstract artworks featuring geometric shapes and neutral tones. The artworks are framed and displayed side-by-side on a wall. Product used: Modern Abstract Wall Art; Estimated Cost: $2,000 - $4,000 USD',
    },
    ],
    elegant: [
      {
        src: 'https://i.pinimg.com/474x/39/d8/be/39d8be077020a2a4c7d630c498dbf81f.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'The image showcases a modern, contemporary wall sconce with a circular design. The sconce features a metal frame with a cutout of a mountain landscape. LED lights illuminate the cutout, creating a striking visual effect. Estimated Cost: $100 - $200 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/19/74/aa/1974aa71050e58c7d69b15c33a607aa7.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'The image showcases a modern abstract painting featuring vibrant colors of blue, orange, and yellow. The painting has a textured style with visible brushstrokes. Product used: Modern Abstract Painting. Estimated Cost: $100 - $500 USD',
    },
    {
        src: 'https://i.pinimg.com/564x/e7/c3/d6/e7c3d6d2fde8a2f1923078f19392d9c6.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'The image showcases a pair of decorative wall sconces with a circular design and a mountain landscape cutout. The sconces feature LED lights that illuminate the cutout, creating a striking visual effect.  Product used: Modern Mountain Landscape Wall Sconces. Estimated Cost: $100 - $500 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/16/36/e4/1636e4d18dcc7def234c639cfa609521.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/57/12/1f/57121fbd1f215782e1c0c34edb8020a4.jpg',
        alt: '',
        category: 'elgant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/b6/8e/28/b68e28f35a1a48b82a79334820aeef19.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/35/93/2a/35932a3889d71cc24d02fe4c33e6a5a7.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/83/02/c0/8302c07e87689523de16f8d9a36024b1.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/18/1d/28/181d28f9259a8eca8b092f5061ef58e9.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/f0/a9/1a/f0a91a8441d8697cabf882506b064d91.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/52/1c/3b/521c3b7a5c67603f66c0f0fa77fb1b64.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    {
        src: 'https://i.pinimg.com/474x/68/6a/d4/686ad41ae5012b779e3a69b89e3dbed9.jpg',
        alt: '',
        category: 'elegant',
        preview: 'An Elegant Design',
        description: 'Products used are: Freestanding Bathtub, Wall Paneling, Lighting, Tile. Estimated Cost: $200 - $400 USD',
    },
    ]
};

function ImageGallery() {
    const [category, setCategory] = useState('all');
    const [galleryImages, setGalleryImages] = useState(imagesData.all);
    const [modalImage, setModalImage] = useState(null);
    const [modalText, setModalText] = useState('');

    useEffect(() => {
        setGalleryImages(imagesData[category] || imagesData.all);
    }, [category]);

    const showCategory = (category) => {
        setCategory(category);
    };

    const showModal = (image) => {
        setModalImage(image.src);
        setModalText(image.description);
    };

    const closeModal = () => {
        setModalImage(null);
        setModalText('');
    };

    return (
        <div>
          <Navbar/>
            <header>
                <ul className="category-list">
                    <li className="filter-btn-item"><button onClick={() => showCategory('all')}>All</button></li>
                    <li className="filter-btn-item"><button onClick={() => showCategory('livingroom')}>Living Room</button></li>
                    <li className="filter-btn-item"><button onClick={() => showCategory('kitchen')}>Kitchen</button></li>
                    <li className="filter-btn-item"><button onClick={() => showCategory('bathroom')}>Bathroom</button></li>
                    <li className="filter-btn-item"><button onClick={() => showCategory('bedroom')}>Bedroom</button></li>
                    <li className="filter-btn-item"><button onClick={() => showCategory('contemporary')}>Contemporary Style</button></li>
                    <li className="filter-btn-item"><button onClick={() => showCategory('elegant')}>Elegant Look</button></li>
                </ul>
            </header>
            <main>
                <div id="gallery" className="image-gallery">
                    {galleryImages.map((image, index) => (
                        <div className="image-box fade-in-element" key={index} onClick={() => showModal(image)}>
                            <img src={image.src} alt={image.alt} />
                            <div className="preview-text">{image.preview}</div>
                        </div>
                    ))}
                </div>
            </main>

            {modalImage && (
                <div id="modal" className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{modalText}</p>
                        <img src={modalImage} alt="Modal" />
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
}

export default ImageGallery;