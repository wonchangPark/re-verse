import { useLocation } from "react-router-dom";
import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import BreadCrumbBtn from "../atoms/BreadCrumbBtn";

import NavBtn from "../atoms/NavBtn";

import { AiFillHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";
import { TbHanger } from "react-icons/tb";

function Navbar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    console.log(location.pathname);
  }, [location]);
  return (
    <Box className="flex justify-between pb-14">
      <Box>
        <Breadcrumb separator="">
          <Box className="relative">
            <Box className="absolute z-50">
              <BreadcrumbItem>
                <Link to="/lobby">
                  <BreadCrumbBtn text={"RE-VERSE"} from={"from-main1"} to={"to-sub1"} />
                </Link>
              </BreadcrumbItem>
            </Box>
            <Box className="absolute left-52">
              {location.pathname === "/lobby" && (
                <BreadcrumbItem>
                  <Link to="/lobby">
                    <BreadCrumbBtn text={"로비"} from={"from-main2"} to={"to-sub2"} />
                  </Link>
                </BreadcrumbItem>
              )}
              {location.pathname.includes("/friend/") && (
                <BreadcrumbItem>
                  <Link to="/friend/list">
                    <BreadCrumbBtn text={"친구"} from={"from-main2"} to={"to-sub2"} />
                  </Link>
                </BreadcrumbItem>
              )}
              {location.pathname.includes("/archive/") && (
                <BreadcrumbItem>
                  <Link to="/archive/my">
                    <BreadCrumbBtn text={"아카이브"} from={"from-main2"} to={"to-sub2"} />
                  </Link>
                </BreadcrumbItem>
              )}
              {location.pathname === "/character" && (
                <BreadcrumbItem>
                  <Link to="/character">
                    <BreadCrumbBtn text={"캐릭터 선택"} from={"from-main2"} to={"to-sub2"} />
                  </Link>
                </BreadcrumbItem>
              )}
            </Box>
          </Box>
        </Breadcrumb>
      </Box>
      {/* <Box className=""> */}
      <Box className="flex justify-between w-72">
        <Link to="/lobby">
          {location.pathname === "/lobby" ? (
            <NavBtn
              icon={<AiFillHome className="text-3xl text-gray-800" />}
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<AiFillHome className="text-3xl text-white" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>

        <Link to="/friend/list">
          {location.pathname.includes("/friend/") ? (
            <NavBtn
              icon={<MdPeopleAlt className="text-3xl text-gray-800" />}
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<MdPeopleAlt className="text-3xl text-white" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>

        <Link to="/archive/my">
          {location.pathname.includes("/archive/") ? (
            <NavBtn
              icon={<BsArchiveFill className="text-3xl text-gray-800" />}
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<BsArchiveFill className="text-3xl text-white" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>
        <Link to="/character">
          {location.pathname === "/character" ? (
            <NavBtn
              icon={<TbHanger className="text-3xl text-gray-800 -scale-x-100" />}
              from={"from-main2"}
              to={"to-sub2"}
            />
          ) : (
            <NavBtn
              icon={<TbHanger className="text-3xl text-white -scale-x-100" />}
              from={"from-main1"}
              to={"to-sub1"}
            />
          )}
        </Link>
      </Box>
      {/* </Box> */}
    </Box>
    // <Box>
    //   <Box>
    //     <Breadcrumb>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink as={Link} to="/lobby">
    //           RE-VERSE
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink as={Link} to="/character">
    //           캐릭터 선택
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink as={Link} to="/friend">
    //           친구
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink isCurrentPage as={Link} to="/archive">
    //           아카이브
    //         </BreadcrumbLink>
    //       </BreadcrumbItem>
    //     </Breadcrumb>
    //   </Box>
    // </Box>
  );
}

export default Navbar;
