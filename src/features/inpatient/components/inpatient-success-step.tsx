import { CheckCircle2 } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

import {
    Card,
    CardContent,
} from "@/shared/components/ui/card";

import { useInpatientStore } from "../store/use-inpatient-store";
import { useNavigate } from "react-router-dom";

export default function InpatientSuccessStep() {
    const navigate = useNavigate();

    const setCurrentStep =
        useInpatientStore(
            (state) =>
                state.setCurrentStep
        );

    const handleGoToList = () => {
        setCurrentStep("form");

        navigate("/list");
    };

    return (
        <Card className="max-w-2xl">
            <CardContent className="flex flex-col items-center justify-center gap-5 py-10 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">
                        Pasien Berhasil Ditambahkan
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Data pasien rawat inap telah
                        berhasil disimpan ke daftar
                        pasien aktif.
                    </p>
                </div>

                <Button
                    size="lg"
                    onClick={handleGoToList}
                >
                    Lihat Daftar Pasien
                </Button>
            </CardContent>
        </Card>
    );
}