var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Image = new keystone.List('Image',{
	label:'图片',
	autokey:{from:'name',path:'key',unique:true}
});

Image.add({
	name: { type: Types.Name, required: true, index: true,label:'图片名' },
	image : {
		label:'图片',
		type:Types.LocalFile,
		dest:__dirname+'/../public/files/images',
		prefix:'/files/images',
		allowedTypes:['image/jpeg','image/pjpeg','image/png'],
		datePrefix:'YYMMDDhms',
		format:function(item,file){
			return '<img src="/files/images/'+file.filename+'"	style="max-width:300px"><input value="'+'/files/images/'+file.filename+'">';
		}
	}
});



Image.register();
