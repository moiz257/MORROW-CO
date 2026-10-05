import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Morrow & Co. — Admin",
    description: "Manage the Morrow & Co. marketplace.",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
