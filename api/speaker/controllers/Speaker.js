'use strict';

/**
 * Speaker.js controller
 *
 * @description: A set of functions called "actions" for managing `Speaker`.
 */

module.exports = {

  /**
   * Retrieve speaker records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.speaker.fetchAll(ctx.query);
  },

  /**
   * Retrieve a speaker record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.speaker.fetch(ctx.params);
  },

  /**
   * Create a/an speaker record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.speaker.add(ctx.request.body);
  },

  /**
   * Update a/an speaker record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.speaker.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an speaker record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.speaker.remove(ctx.params);
  }
};
