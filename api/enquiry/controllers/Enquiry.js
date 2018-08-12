'use strict';

/**
 * Enquiry.js controller
 *
 * @description: A set of functions called "actions" for managing `Enquiry`.
 */

module.exports = {

  /**
   * Retrieve enquiry records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.enquiry.fetchAll(ctx.query);
  },

  /**
   * Retrieve a enquiry record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.enquiry.fetch(ctx.params);
  },

  /**
   * Count enquiry records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.enquiry.count(ctx.query);
  },

  /**
   * Create a/an enquiry record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    // await strapi.plugins['email'].services.email.send({
    //   to: 'admin@strapi.io',
    //   from: 'robbot@strapi.io',
    //   replyTo: 'no-reply@strapi.io',
    //   subject: 'Use strapi email provider successfully',
    //   text: 'Hello world!',
    //   html: 'Hello world!'
    // });
    return strapi.services.enquiry.add(ctx.request.body);
  },

  /**
   * Update a/an enquiry record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.enquiry.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an enquiry record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.enquiry.remove(ctx.params);
  }
};
