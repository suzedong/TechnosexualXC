module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/w1/person': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    post: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/:id': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/w1/person/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/w1/person/bulk': {
    post: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Has many routes and permissions */

  '/api/w1/person/has/comments': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/:parentId/comments': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    post: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/:parentId/comments/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/:parentId/comments/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/:parentId/comments/:id': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/w1/person/:parentId/comments/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */



};