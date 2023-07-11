import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductsList from "@/components/products-list";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("873917f6-acd0-4ffa-87ce-fc9fce9ed552");
    const products = await getProducts({isFeatured: true});
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductsList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;