var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
    label:'文章'
});

Post.add({
	title: { type: String, required: true ,label:'标题'},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true ,label:'状态'},
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' },label:'发布日期' },
	//image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150,label:'简要内容' },
		extended: { type: Types.Html, wysiwyg: true, height: 400,label:'详细内容' }
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true,required:true, initial:true,label:'标签' }
});

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
