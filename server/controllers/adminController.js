import userModel from "../models/userModel.js";
// get donor list
export const getDonorListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({ role: "donor" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      totalCount: donorData.length,
      message: "Donor List Fetched Successfully",
      donorData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donor List API",
      error,
    });
  }
};
// get hospital list
export const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      totalCount: hospitalData.length,
      message: "Hospital List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital List API",
      error,
    });
  }
};
// get hospital list
export const getOrganisationListController = async (req, res) => {
  try {
    const organisationData = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      totalCount: organisationData.length,
      message: "Organisation List Fetched Successfully",
      organisationData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Organisation List API",
      error,
    });
  }
};
// Delete Record
export const deleteRecordController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id)
    return res.status(200).send({
      success: true,
      message: "Record Deleted Successfully",
      
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: "Error in Delete Record API",
      error,
    })
  }
}
