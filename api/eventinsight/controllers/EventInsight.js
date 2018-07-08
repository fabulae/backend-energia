'use strict';

/**
 * EventInsight.js controller
 *
 * @description: A set of functions called "actions" for managing `EventInsight`.
 */

module.exports = {

  /**
   * Retrieve eventInsight records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.eventInsight.fetchAll(ctx.query);
  },

  /**
   * Retrieve a eventInsight record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.eventInsight.fetch(ctx.params);
  },

  /**
   * Count eventInsight records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.eventInsight.count(ctx.query);
  },

  /**
   * Create a/an eventInsight record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.eventInsight.add(ctx.request.body);
  },

  /**
   * Update a/an eventInsight record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.eventInsight.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an eventInsight record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.eventInsight.remove(ctx.params);
  },

  findByCategory: async (ctx) => {
    return strapi.services.eventinsight.fetchByCategory(ctx.params);
  }
};
