import React from 'react';

const BookmarkCard = () => {
    return (
        <Card key={bookmark?._id} className="border p-2 rounded-none">
        <CardBody>
          <div className="lg:flex gap-5 space-y-5 lg:space-y-0">
            <div>
              <Image
                src={bookmark?.company_logo}
                className="rounded-none hidden lg:flex lg:h-28 lg:w-56"
                alt="company logo"
              />
            </div>
            <div className=" flex flex-1 justify-between relative">
              <div>
                <h1 className="text-2xl  font-semibold">
                  {bookmark?.category}
                </h1>
                <h3 className="text-lg  font-semibold">
                  {bookmark?.company_name}
                </h3>

                <p className="font-semibold text-secondaryColor text-sm">
                  {bookmark?.location} ({bookmark?.type})
                </p>
                <p className="font-semibold text-secondaryColor text-sm">
                  Posted{" "}
                  {bookmark &&
                    bookmark.posted_date &&
                    Math.floor(
                      (new Date() - new Date(bookmark.posted_date)) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                  Days Ago
                </p>
              </div>
              <div>
                <Dropdown className="rounded-none absolute -right-10">
                  <DropdownTrigger>
                    <Button className="bg-transparent ">
                      <BiDotsHorizontalRounded
                        style={{
                          color: "#5b6e7f",
                          fontSize: 32,
                          cursor: "pointer",
                        }}
                      />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">
                      {" "}
                      <div className="flex items-center gap-3">
                        <CgDetailsMore />
                        <Link href={`/Find-Jobs/${bookmark?.jobId}`}>
                          Details
                        </Link>
                      </div>
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-red-500 hover:text-red-500 "
                    >
                      <div
                        onClick={() => handleBookmarkDelete(bookmark?._id)}
                        className="flex items-center gap-3"
                      >
                        <MdDeleteOutline />
                        Remove
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
};

export default BookmarkCard;