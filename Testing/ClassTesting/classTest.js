class QueryObj{
    constructor(orgName = null, orgType = null, eventdate = null, location = null) {
        this.orgName = orgName;
        this.orgType = orgType;
        this.eventdate = eventdate;
        this.location = location;
    }
}

let q = new QueryObj();
q.orgType = "social";
q.eventdate = new Date(2023, 3, 1);
q.location = "selmalagerløfsvej";

console.log(q);