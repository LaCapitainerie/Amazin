const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  
  const Users = await prisma.user.createMany({
    data: [
    ],
    skipDuplicates: true,
  });

  
  
  const Items = await prisma.item.createMany({
    data: [
      { name: 'Item 1', description: 'Description for item 1', price: 10.99, stock: 100, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033 },
      { name: 'Item 2', description: 'Description for item 2', price: 12.99, stock: 90, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 3', description: 'Description for item 3', price: 14.99, stock: 80, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 4', description: 'Description for item 4', price: 16.99, stock: 70, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 5', description: 'Description for item 5', price: 18.99, stock: 60, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 6', description: 'Description for item 6', price: 20.99, stock: 50, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 7', description: 'Description for item 7', price: 22.99, stock: 40, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 8', description: 'Description for item 8', price: 24.99, stock: 30, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 9', description: 'Description for item 9', price: 26.99, stock: 20, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 10', description: 'Description for item 10', price: 28.99, stock: 10, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 48.890694, long: 2.242033  },
      { name: 'Item 11', description: 'Description for item 11', price: 30.99, stock: 15, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 12', description: 'Description for item 12', price: 32.99, stock: 25, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 13', description: 'Description for item 13', price: 34.99, stock: 35, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 14', description: 'Description for item 14', price: 36.99, stock: 45, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 15', description: 'Description for item 15', price: 38.99, stock: 55, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 16', description: 'Description for item 16', price: 40.99, stock: 65, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 17', description: 'Description for item 17', price: 42.99, stock: 75, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 18', description: 'Description for item 18', price: 44.99, stock: 85, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 19', description: 'Description for item 19', price: 46.99, stock: 95, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
      { name: 'Item 20', description: 'Description for item 20', price: 48.99, stock: 105, image: 'https://th.bing.com/th/id/OIP.l_yzNp0NqpDSyb-JEKO43QAAAA?rs=1&pid=ImgDetMain', lat: 45.756987, long: 4.828282  },
    ],
    skipDuplicates: true,
  });
}

main()