var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Image = new keystone.List('Image',{
	autokey:{from:'name',path:'key',unique:true}
});

Image.add({
	name: { type: String, required: true, index: true},
	image : {
		type:Types.LocalFile,
		dest:__dirname+'/../public/timeline/files/images',
		prefix:'/timeline/files/images',
		allowedTypes:['image/jpeg','image/pjpeg','image/png'],
		datePrefix:'YYMMDDhms',
		format:function(item,file){
			return '<img src="/timeline/files/images/'+file.filename+'"	style="max-width:300px;display:block">';
		}
	}
});



Image.register();
