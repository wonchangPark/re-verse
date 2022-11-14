import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPaper, getPaper, getStuffDetail } from "../../api/reverse";
import {
  createArticle,
  setEditBtn,
  setInfo,
  setModalIsOpen,
  setTravel,
  setTravelReadIsOpen,
  setTravelWriteIsOpen,
} from "../../modules/reverse";

import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import ArticlesTimeline from "./TravelTimeline";
import ArticleDetail from "./ArticleDetail";

import ArchiveDatePicker from "../molecules/ReverseDatePicker";
import ReverseTextEditor from "./ReverseTextEditor";

import moment from "moment/moment";

function TravelReadModal() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  // console.log("____________________");
  // console.log(reverse.info);

  const [editTitle, setEditTitle] = useState("");
  useEffect(() => {
    if (reverse.info.details) setEditTitle(reverse.info.details.title);
  }, [reverse.info.details]);
  const handleEditTitle = (e) => {
    setEditTitle(e.target.value);
    // dispatch(createArticle({ ...reverse.article, title: editTitle }));
  };
  const handleGetDetail = async () => {
    await getPaper(
      reverse.info.archiveId,
      reverse.info.stuffs[0].id,
      reverse.info.details.id,
      success,
      fail
    );
  };
  const success = (res) => {
    // console.log(res);
    dispatch(setInfo({ ...reverse.info, details: res.data }));
  };

  const fail = (err) => {
    // console.log(err);
  };
  const editSaveContent = () => {
    // dispatch(createArticle({ ...reverse.article, content: editText }));
    dispatch(
      setInfo({
        archiveId: reverse.info.archiveId,
        stuffs: reverse.info.stuffs,
        details: { ...reverse.info.details, title: editTitle },
      })
    );
  };

  // 이거.. 왜 돼...? 너 뭐야...??
  useEffect(() => {
    editSaveContent();
  }, [editTitle]);
  const handleEditSubmit = async () => {
    await editPaper(
      reverse.info.archiveId,
      reverse.info.stuffs[0].id,
      reverse.info.details.id,

      {
        title: editTitle,
        content: reverse.info.details.content,
        memoryTime: moment(reverse.info.details.memoryTime).format(
          "yyyy-MM-DD"
        ),
      },
      editSuccess,
      editFail
    );
  };

  const editSuccess = (res) => {
    // console.log(res);
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[0].id,
      stuffSuccess,
      stuffFail
    );
  };

  const stuffSuccess = (res) => {
    // console.log(res);
    dispatch(setTravel({ ...reverse.travel, articleList: res.data.papers }));
    // dispatch(setInfo({ ...reverse.info, details: null }));
    // console.log(res.data);
  };

  const stuffFail = (err) => {
    // console.log(err);
  };

  const editFail = (err) => {
    // console.log(err);
  };

  // useEffect(() => {
  //   getStuffDetail(archiveId, stuffId, getDetailSuccess, getDetailFail);
  // }, []);
  const getDetailSuccess = (res) => {
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    // console.log(res);
    dispatch(
      setTravel({
        ...reverse.travel,
        articleList: res.data.papers,
      })
    );
  };
  const getDetailFail = (err) => {
    // console.log(err);
  };
  useEffect(() => {
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[0].id,
      getDetailSuccess,
      getDetailFail
    );
  }, []);

  return (
    <>
      <Modal
        isOpen={reverse.travelReadIsOpen}
        // onClose={dispatch(setOpen())}
        size={"4xl"}
        isCentered
      >
        <ModalOverlay />
        {!reverse.editBtn ? (
          <ModalContent minH={"500"}>
            <ModalHeader mb={4} textAlign="center">
              <div className="flex justify-between items-center">
                윤선이의 여행 기록
                <AiOutlineClose
                  className="cursor-pointer"
                  onClick={() => {
                    // console.log("닫기 버튼");
                    dispatch(setTravelReadIsOpen());
                  }}
                />
              </div>
            </ModalHeader>
            {/* <ModalCloseButton mt={1.5} /> */}
            <ModalBody>
              <div className="flex justify-between">
                {/* timeline */}
                <div className="bg-white border-basic3 rounded-lg w-[calc(96%/3)] h-[500px] border-2">
                  <div className="font-bold text-center py-3">timeline</div>
                  <div className="h-[calc(90%)] overflow-auto scrollbar-hide">
                    <ArticlesTimeline />
                  </div>
                </div>
                {/* article detail */}
                <div className="bg-white border-basic3 rounded-lg w-[calc(96%/3*2)]  border-2 p-4">
                  <ArticleDetail />
                </div>
              </div>

              {/* {reverse.travelArticleList.map((article, idx) => {
              return (
                <div key={`travel-${idx}`}>
                  <div>{article.title}</div>
                </div>
              );
            })} */}

              {/* <div class="relative max-w-2xl">
              <div class="absolute top-0 h-full border-r-2 border-gray-500 left-3"></div>
              <ul class="space-y-2">
                <li>
                  <div class="flex items-center">
                    <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                    <h5 class="ml-4 font-bold text-gray-600">
                      Tailwind CSS 3.0
                    </h5>
                  </div>
                  <div class="ml-12">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor
                      si
                    </p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                    <h5 class="ml-4 font-bold text-gray-600">
                      Tailwind CSS 3.0.5v
                    </h5>
                  </div>
                  <div class="ml-12">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor
                      si
                    </p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                    <h5 class="ml-4 font-bold text-gray-600">
                      Tailwind CSS 3.0.7v
                    </h5>
                  </div>
                  <div class="ml-12">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor
                      si
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}
            </ModalBody>

            <ModalFooter pt={0}>
              {/* <button
              onClick={() => {
                dispatch(setTravelReadIsOpen());
                console.log("cancel button");
              }}
              className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
            >
              취소하기
            </button>
            <button
              onClick={() => {
                console.log("article is posted!");
                // handleArchiveSubmit();
                // onClose;
              }}
              className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
            >
              게시하기
            </button> */}
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent minH={"750"}>
            <ModalHeader mb={4} textAlign="center">
              글 수정하기
            </ModalHeader>
            {/* <ModalCloseButton mt={1.5} /> */}
            <ModalBody>
              <div className="flex justify-between">
                {/* 글 제목 수정*/}
                <div className="w-[calc(98%/3*2)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
                  <p className="text-xs text-basic1">글 제목</p>
                  <input
                    type="text"
                    className="w-full focus:outline-none mt-0.5"
                    value={editTitle}
                    onChange={(e) => {
                      handleEditTitle(e);
                    }}
                  />
                </div>
                {/* 기록 날짜 수정*/}
                <div className="w-[calc(98%/3)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
                  <p className="text-xs text-basic1">기록 날짜</p>
                  <div className="flex items-center justify-between mr-1">
                    <ArchiveDatePicker />
                    <AiOutlineCalendar className="text-lg" />
                  </div>
                </div>
              </div>

              <div className="my-3.5 w-full h-[520px] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 overflow-auto scrollbar-hide">
                {/* <글 내용 수정 /> */}
                <ReverseTextEditor />
              </div>
            </ModalBody>

            <ModalFooter pt={0}>
              <button
                onClick={() => {
                  handleGetDetail();
                  dispatch(setEditBtn());
                }}
                className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
              >
                취소하기
              </button>
              <button
                onClick={() => {
                  console.log("travel article is posted!");
                  dispatch(setEditBtn());
                  handleEditSubmit();
                }}
                className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
              >
                수정하기
              </button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  );
}

export default TravelReadModal;
