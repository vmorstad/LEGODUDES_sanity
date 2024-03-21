export const categories = {
    title: "Kategorier",
    name: "categories",
    type: "document",


    fields: [
        {
         title: "Kategorier",
         name: "Categorytitle",
         type: "string"

 },
 {
    title:"Kategorilink",
    name: "Categoryurl",
    type: "slug",
    options:{
        source:"Categorytitle",
        slugify: input => input.toLowerCase().replace(/\s+/g, '-')
    },

 }
 ]


}