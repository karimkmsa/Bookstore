

export default class ApiFeatures {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }

 pagination() {
  let page = Number(this.queryString.page) || 1;
  let limit = Number(this.queryString.limit) || 4;

  if (page < 1) page = 1;

  let skip = (page - 1) * limit;

  this.mongooseQuery.skip(skip).limit(limit);

  return this;
}

  filter() {
    let filterObj = { ...this.queryString };
    let excludedQuery = ["page", "sort", "keyword", "fields"];
    excludedQuery.forEach((q) => {
      delete filterObj[q];
    });
    filterObj = JSON.stringify(filterObj);
    filterObj = filterObj.replace(/\bgt|gte|lt|lte\b/g, (match) => `$${match}`);
    filterObj = JSON.parse(filterObj);
    this.mongooseQuery.find(filterObj)
    return this;

  }

  sort() {
    if (this.queryString.sort) {
      let sortBy = this.queryString.sort.split(",").join(" ");
      this.mongooseQuery.sort(sortBy);
    }
    return this
  }

search() {
  if (this.queryString.keyword) {
    this.mongooseQuery.find({
      $or: [
        {
          title: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        },
        {
          author: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        },
      ],
    });
  }

  return this;
}
  fields() {
    if (this.queryString.fields) {
      let fields = this.queryString.fields.split(",").join(" ");
      this.mongooseQuery.select(fields);
    }
    return this;
  }











}