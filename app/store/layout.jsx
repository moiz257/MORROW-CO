import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Morrow & Co. — Store Dashboard",
    description: "Manage your Morrow & Co. storefront.",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
