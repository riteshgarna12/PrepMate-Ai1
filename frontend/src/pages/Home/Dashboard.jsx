import React, { useEffect, useState } from 'react';
import { CARD_BG } from "../../utils/data";
import toast from "react-hot-toast";
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import SummaryCard from '../../components/Cards/SummaryCard';
import moment from "moment";
import Modal from '../../components/Modal';
import CreateSessionForm from './CreateSessionForm';
import DeleteAlertContent from '../../components/DeleteAlertContent';
import PrepTopicsGrid from '../../components/Cards/PrepTopicsGrid';

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
      setSessions(response.data);
    } catch (error) {
      console.error("Error fetching session data:", error);
    }
  };

  const deleteSession = async (sessionData) => {
    try {
      await axiosInstance.delete(API_PATHS.SESSION.DELETE(sessionData?._id));
      toast.success("Session Deleted Successfully");
      setOpenDeleteAlert({ open: false, data: null });
      fetchAllSessions();
    } catch (error) {
      console.error("Error deleting session data:", error);
    }
  };

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <DashboardLayout onAddSession={() => setOpenCreateModal(true)}>
      <div className='w-9/10 container mx-auto pt-4 pb-4'>
        
        {/* 🔁 User Sessions */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0'>
          {sessions?.map((data, index) => (
            <SummaryCard
              key={data?._id}
              colors={CARD_BG[index % CARD_BG.length]}
              role={data?.role || ""}
              topicsToFocus={data?.topicsToFocus || ""}
              experience={data?.experience || "-"}
              questions={data?.questions?.length || "-"}
              description={data?.description || ""}
              lastUpdated={
                data?.updatedAt
                  ? moment(data.updatedAt).format("Do MMM YYYY")
                  : ""
              }
              onSelect={() => navigate(`/interview-prep/${data?._id}`)}
              onDelete={() => setOpenDeleteAlert({ open: true, data })}
            />
          ))}
        </div>

        {/* 🧠 Pre-Filled Prep Topics Grid */}
        <div className="mt-10 px-4 md:px-0">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-main)]">
            Explore Important Topics for Placements
          </h2>
          <PrepTopicsGrid />
        </div>
      </div>

      {/* ✨ Create Session Modal */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
      >
        <CreateSessionForm />
      </Modal>

      {/* ❌ Delete Confirmation Modal */}
      <Modal
        isOpen={openDeleteAlert?.open}
        onClose={() => {
          setOpenDeleteAlert({ open: false, data: null });
        }}
        title="Delete Alert"
      >
        <div className="w-[90vw] max-w-md bg-white rounded-xl p-4 shadow-lg border border-[var(--color-card-border)]">
          <DeleteAlertContent
            content="Are you sure you want to delete this session detail?"
            onDelete={() => deleteSession(openDeleteAlert.data)}
          />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
